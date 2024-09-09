import Chat from "../models/chat.model.js";

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
      participants: { $all: [senderId, receiverId] },
    });

    if (!chat) {
      chat = await Chat.create({
        participants: [senderId, receiverId],
      });
    }
  } catch (error) {
    console.log("Error in sendMessage controller", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
