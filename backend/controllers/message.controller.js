export const sendMessage = async (req, res) => {
  try {
    console.log("message sent successfully", req.params.id);
  } catch (error) {
    console.log("Error in sendMessage controller", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
