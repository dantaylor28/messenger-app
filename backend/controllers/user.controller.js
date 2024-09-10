import User from "../models/user.model.js";

export const getSidebarUsers = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;

    const fetchedUsers = await User.find({
      _id: { $ne: loggedInUserId },
    }).select("-password");

    res.status(200).json(fetchedUsers);
  } catch (error) {
    console.log("Error in getSidebarUsers controller", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
