import fetch, { Headers } from "node-fetch";
global.fetch = fetch;
global.Headers = Headers;

import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import generateToken from "../utils/generateToken.js";
import cloudinary from "../utils/cloudinary.js";
import { OAuth2Client } from "google-auth-library";

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
      generateToken(newUser._id, res);
      await newUser.save();

      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        username: newUser.username,
        profileImage: newUser.profileImage,
        gender: newUser.gender,
        age: newUser.age,
        createdAt: newUser.createdAt,
      });
    } else {
      res.status(400).json({ error: "Invalid user data" });
    }
  } catch (error) {
    console.log("Error in signup controller", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    // Compare provided password & one saved in db. || "" included to prevent program crashing upon passwords not matching.
    const isPasswordAuthenticated = await bcrypt.compare(
      password,
      user?.password || ""
    );

    // If user not found or pw not matching, return error.
    if (!user || !isPasswordAuthenticated) {
      return res
        .status(400)
        .json({ error: "The username or password provided is incorrect" });
    }
    generateToken(user._id, res);

    res.status(200).json({
      _id: user._id,
      fullName: user.fullName,
      username: user.username,
      email: user.email,
      profileImage: user.profileImage,
      gender: user.gender,
      age: user.age,
      createdAt: user.createdAt,
    });
  } catch (error) {
    console.log("Error in login controller", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const logout = (req, res) => {
  try {
    // Removes cookie upon logging out
    res.cookie("jwtToken", "", { maxAge: 0 });
    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    console.log("Error in logout controller", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const updateProfile = async (req, res) => {
  try {
    const { fullName, username, email, profileImage, gender, age } = req.body;
    const userId = req.user._id;

    if (
      !fullName &&
      !username &&
      !email &&
      !profileImage &&
      gender === undefined &&
      age === undefined
    ) {
      return res.status(400).json({ message: "No profile updates provided" });
    }

    let updateFields = {};
    if (fullName) updateFields.fullName = fullName;
    if (username) updateFields.username = username;
    if (email) updateFields.email = email;
    if (gender !== undefined) updateFields.gender = gender;
    if (age !== undefined) updateFields.age = age;

    if (profileImage) {
      const uploadResponse = await cloudinary.uploader.upload(profileImage);
      updateFields.profileImage = uploadResponse.secure_url;
    }

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { $set: updateFields },
      { new: true }
    );

    res.status(200).json(updatedUser);
  } catch (error) {
    console.log("Error in update profile", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

export const googleAuth = async (req, res) => {
  try {
    const { idToken } = req.body;

    if (!idToken) {
      return res.status(400).json({ error: "Google Id token is required" });
    }

    // Verify the Google ID token
    const ticket = await client.verifyIdToken({
      idToken,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();
    const { email, name, picture, sub } = payload;

    if (!email) {
      return res
        .status(400)
        .json({ error: "Google account must have an email address" });
    }

    // Check if user already exists
    let user = await User.findOne({ email });

    if (!user) {
      // Create a new user if one does not exist
      user = new User({
        fullName: name,
        email,
        username: email.split("@")[0], // Create basic username from email
        profileImage: picture,
        googleId: sub,
        authProvider: "google",
      });
      await user.save();
    }

    // Generate JWT and set as cookie (using generateToken util function)
    generateToken(user._id, res);

    res.status(200).json({
      _id: user._id,
      fullName: user.fullName,
      username: user.username,
      email: user.email,
      profileImage: user.profileImage,
      gender: user.gender,
      age: user.age,
      createdAt: user.createdAt,
    });
  } catch (error) {
    console.log("Error in Google Auth controller", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

// export const AuthUser = (req, res) => {
//   try {
//     res.status(200).json(req.user);
//   } catch (error) {
//     console.log("Error in AuthUser controller", error.message);
//     res.status(500).json({ message: "Internal server error" });
//   }
// };
