import React, { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

const useLogin = () => {
  const [sendingData, setSendingData] = useState(false);
  const { setAuthenticatedUser } = useAuthContext();

  const loginUser = async (username, password) => {
    const success = handleLoginErrors(username, password);
    if (!success) return;
    setSendingData(true);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }

      localStorage.setItem("authenticatedUser", JSON.stringify(data));
      setAuthenticatedUser(data);
      toast.success("Signed in successfully");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setSendingData(false);
    }
  };

  const loginWithGoogle = async (idToken) => {
    setSendingData(true);
    try {
      
    } catch (error) {
      
    }
  };

  return { sendingData, loginUser };
};

export default useLogin;

function handleLoginErrors(username, password) {
  if (!username || !password) {
    toast.error("Please fill in all fields");
    return false;
  }
  return true;
}
