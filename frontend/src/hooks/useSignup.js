import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useSignup = () => {
  const [sendingData, setSendingData] = useState(false);
  const { setAuthenticatedUser } = useAuthContext();

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
      const res = await fetch("/api/auth/signup", {
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
      if (data.error) {
        throw new Error(data.error);
      }
      localStorage.setItem("authenticatedUser", JSON.stringify(data));
      setAuthenticatedUser(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setSendingData(false);
    }
  };
  return { sendingData, signupUser };
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
  if (!/\S+@\S+\.\S+/.test(email)) {
    toast.error("Invalid email format");
    return false;
  }
  return true;
}
