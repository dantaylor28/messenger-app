import React, { useState } from "react";
import toast from "react-hot-toast";

const useSignup = () => {
  const [sendingData, setSendingData] = useState(false);
};

const signupUser = async ({
  fullName,
  email,
  username,
  password,
  confirmPassword,
  age,
  gender,
}) => {
  const success = handleSignupErrors({
    fullName,
    email,
    username,
    password,
    confirmPassword,
    age,
    gender,
  });
  if (!success) return;
};

export default useSignup;

function handleSignupErrors({
  fullName,
  email,
  username,
  password,
  confirmPassword,
  age,
  gender,
}) {
  if (
    !fullName ||
    !email ||
    !username ||
    !password ||
    !confirmPassword ||
    !age ||
    !gender
  ) {
    toast.error("Please fill in all fields");
    return false;
  }
  if (password !== confirmPassword) {
    toast.error("Your passwords do not match");
    return false;
  }
  if (password.length < 6) {
    toast.error("Passwords must be at least 6 characters");
    return false;
  }
}
