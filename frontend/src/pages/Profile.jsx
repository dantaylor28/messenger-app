import React from "react";
import useUpdateProfile from "../hooks/useUpdateProfile";
import { useAuthContext } from "../context/AuthContext";
import { User } from "lucide-react";

const Profile = () => {
  // const { sendingData, setSendingData, updateProfile } = useUpdateProfile();
  // const { authenticatedUser } = useAuthContext();

  // const handleImageUpload = async (e) => {};
  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-2xl font-medium tracking-widest mt-10">
          My Profile
        </h1>
        <h2 className="mt-6 font-light">Personal Information</h2>
        {/* update name, username, email, password section */}
      </div>
      <div className="flex items-center justify-center">
        <div className="w-[30%]">
          <div className="flex items-center gap-0.5 mt-4">
            <User className="size-4" />
            <label htmlFor="full-name">
              <span className="text-xs font-medium">Full Name</span>
            </label>
          </div>
          <div>name input here..</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
