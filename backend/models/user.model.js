import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      default: () => bcrypt.hashSync(Math.random().toString(36).slice(-8), 10),
      minlength: 6,
    },
    gender: {
      type: String,
      default: null,
      enum: ["male", "female", "prefer not to say"],
    },
    age: {
      type: Number,
      default: null,
    },
    profileImage: {
      type: String,
      default: "",
    },
    googleId: {
      type: String,
    },
    authProvider: {
      type: String,
      enum: ["local", "google"],
      default: "local",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
