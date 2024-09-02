import User from "../models/user.model.js";

export const signup = async (req, res) => {
  try {
    const {
      fullName,
      email,
      username,
      password,
      confirmPassword,
      gender,
      age,
    } = req.body;

    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords do not match" });
    }

    const user = await User.findOne({ username });

    if (user) {
      return res.status(400).json({ error: "This username already exists" });
    }

    // Hash password here..

    // Assigns random male/female profile pic
    const maleProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const femaleProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;
    const unisexProfilePic = `https://avatar.iran.liara.run/public?username=${username}`;

    const newUser = new User({
      fullName,
      email,
      username,
      password,
      gender,
      age,
      profileImage:
        gender === "male"
          ? maleProfilePic
          : gender === "female"
          ? femaleProfilePic
          : unisexProfilePic,
    });

    await new User.save();

    res.status(201).json({
      _id: newUser._id,
      fullName: newUser.fullName,
      username: newUser.username,
      profileImage: newUser.profileImage,
    });
  } catch (error) {
    console.log("Error in signup controller", error.mesage);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const login = (req, res) => {
  console.log("Login user");
};

export const logout = (req, res) => {
  console.log("Logout user");
};
