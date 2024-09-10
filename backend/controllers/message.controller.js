import Chat from "../models/chat.model.js";
import Message from "../models/message.model.js";

export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    // : changes name to receiverId
    const { id: receiverId } = req.params;
    // req.user attained from protectRoute function
    const senderId = req.user._id;

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
    });

    if (newMessage) {
      chat.messages.push(newMessage._id);
    }

    // await chat.save();
    // await newMessage.save();

    // This code does same as above but just runs parallel to eachother rather than one at a time.
    await Promise.all([chat.save(), newMessage.save()]);

    res.status(201).json(newMessage);
  } catch (error) {
    console.log("Error in sendMessage controller", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getMessages = async (req, res) => {
  try {
    
  } catch (error) {
    console.log("Error in getMessages controller", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
}
