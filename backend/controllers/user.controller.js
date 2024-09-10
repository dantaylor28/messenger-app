export const getSidebarUsers = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;
  } catch (error) {
    console.log("Error in getSidebarUsers controller", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
