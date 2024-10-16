import React, { useState } from "react";
import { useAuthContext } from "../context/AuthContext";

const useLogin = () => {
  const [sendingData, setSendingData] = useState(false);
  const { setAuthenticatedUser } = useAuthContext();

  const loginUser = async (username, password) => {
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
    } catch (error) {
      toast.error(error.message);
    } finally {
      setSendingData(false);
    }
  };

  return { sendingData, loginUser };
};

export default useLogin;
