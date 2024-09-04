import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

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
    const emailAddress = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ error: "This username already exists" });
    }
    if (emailAddress) {
      return res
        .status(400)
        .json({ error: "This email is registered with an existing account" });
    }

    // Hash password here

    // 10 is level of security. the higher the number the longer it takes to hash. 10 is general default option.
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Assigns random male/female profile pic
    const maleProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const femaleProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;
    const unisexProfilePic = `https://avatar.iran.liara.run/public?username=${username}`;

    const newUser = new User({
      fullName,
      email,
      username,
      password: hashedPassword,
      gender,
      age,
      profileImage:
        gender === "male"
          ? maleProfilePic
          : gender === "female"
          ? femaleProfilePic
          : unisexProfilePic,
    });

    if (newUser) {
      // Generate JWT token here
      await newUser.save();

      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        username: newUser.username,
        profileImage: newUser.profileImage,
      });
    } else {
      res.status(400).json({ error: "Invalid user data" });
    }
  } catch (error) {
    console.log("Error in signup controller", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const login = (req, res) => {
  console.log("Login user");
};

export const logout = (req, res) => {
  console.log("Logout user");
};
