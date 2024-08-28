import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
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
    minlength: 6,
  },
  gender: {
    type: String,
    required: true,
    enum: ["male", "female", "prefer not to say"],
  },
  age: {
    type: Number,
    required: true,
  },
  profileImage: {
    type: String,
    default: "",
  },
});

const User = mongoose.model("User", userSchema);

export default User;
