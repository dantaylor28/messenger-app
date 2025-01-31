import React, { useState } from "react";

const useUpdateProfile = () => {
  const [sendingData, setSendingData] = useState();

  const updateProfile = async (data) => {
    setSendingData(true);
    try {
      const res = await fetch("/auth/profile", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullName, username, email, profileImage }),
      });

      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }

      toast.success("Profile updated successfully");
    } catch (error) {
        toast.error(error.message);
    } finally {
      setSendingData(false);
    }
  };
};

export default useUpdateProfile;
