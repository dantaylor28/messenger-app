import React, { useState } from "react";
import toast from "react-hot-toast";

const useUpdateProfile = () => {
  const [sendingData, setSendingData] = useState();

  const updateProfile = async (data) => {
    setSendingData(true);
    try {
      const res = await fetch("/api/auth/profile", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(data),
      });

      const responseData = await res.json();
      if (responseData.error) {
        throw new Error(responseData.error);
      }

      toast.success("Profile updated successfully");

      return responseData;
    } catch (error) {
      toast.error(error.message);
    } finally {
      setSendingData(false);
    }
  };

  return { sendingData, updateProfile };
};

export default useUpdateProfile;
