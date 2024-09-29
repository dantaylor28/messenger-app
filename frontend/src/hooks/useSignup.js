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

  setSendingData(true);

  try {
    const res = await fetch("http://localhost:5173/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fullName,
        email,
        username,
        password,
        confirmPassword,
        age,
        gender,
      }),
    });

    const data = await res.json();
    console.log(data);
  } catch (error) {
    toast.error(error.message);
  } finally {
    setSendingData(false);
  }

  return { loading, signup };
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
  return true;
}
