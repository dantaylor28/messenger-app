import Chat from "../models/chat.model.js";
import Message from "../models/message.model.js";
import { getReceiverSocketId, io } from "../socket/socket.js";
import cloudinary from 'cloudinary';

export const sendMessage = async (req, res) => {
  try {
    const { message, image } = req.body;
    // : changes name to receiverId
    const { id: receiverId } = req.params;
    // req.user attained from protectRoute function
    const senderId = req.user._id;

    let imageUrl;
    if (image) {
      const uploadResponse = await cloudinary.uploader.upload(image);
      imageUrl = uploadResponse.secure_url;
    }

    // Find the chat which contains the 2 users.
    // Using mongoDB syntax below to find chat which contains the sender and receiver IDs
    let chat = await Chat.findOne({
      members: { $all: [senderId, receiverId] },
    });

    if (!chat) {
      chat = await Chat.create({
        members: [senderId, receiverId],
      });
    }

    const newMessage = new Message({
      senderId,
      receiverId,
      message,
      image: imageUrl,
    });

    if (newMessage) {
      chat.messages.push(newMessage._id);
    }

    // await chat.save();
    // await newMessage.save();

    // This code does same as above but just runs parallel to eachother rather than one at a time.
    await Promise.all([chat.save(), newMessage.save()]);

    const receiverSocketId = getReceiverSocketId(receiverId);
    if (receiverSocketId) {
      // io.to(<socketId>).emit() is used to send events to specific client
      io.to(receiverSocketId).emit("newMessage", newMessage);
    }

    res.status(201).json(newMessage);
  } catch (error) {
    console.log("Error in sendMessage controller", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getMessages = async (req, res) => {
  try {
    const { id: userToChatId } = req.params;
    const senderId = req.user._id;

    const chat = await Chat.findOne({
      members: { $all: [senderId, userToChatId] },
      // Populate is a mongodb method which will populate with the actual messages rather than just a reference to them ie just the id.
    }).populate("messages");

    // Return an empty array, if the chat doesn't exist/can't be found
    if (!chat) return res.status(200).json([]);

    const messages = chat.messages;
    res.status(200).json(messages);
  } catch (error) {
    console.log("Error in getMessages controller", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
