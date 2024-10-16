import React, { useState } from "react";
import { useAuthContext } from "../context/AuthContext";

const useLogout = () => {
  const [sendingData, setSendingData] = useState(false);
  const { setAuthenticatedUser } = useAuthContext();

  const logoutUser = async () => {
    setSendingData(true);
    try {
      const res = await fetch("/api/auth/logout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }

      localStorage.removeItem("authenticatedUser");
      setAuthenticatedUser(null);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setSendingData(false);
    }
  };

  return { sendingData, logoutUser };
};

export default useLogout;
