import React from "react";
import useUpdateProfile from "../hooks/useUpdateProfile";
import { useAuthContext } from "../context/AuthContext";
import { User, UserCheck } from "lucide-react";

const Profile = () => {
  // const { sendingData, setSendingData, updateProfile } = useUpdateProfile();
  const { authenticatedUser } = useAuthContext();

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
          {/* Full name input */}
          <div>
            <div className="flex items-center gap-0.5 mt-4">
              <User className="size-4" />
              <label htmlFor="full-name">
                <span className="text-xs font-medium">Full Name</span>
              </label>
            </div>
            <div>
              <input
                type="text"
                value={authenticatedUser.fullName}
                className="w-full bg-slate-40 border border-black/40 pl-3 rounded-[4px] h-10 focus:outline-none focus:border-black/80"
              />
            </div>
          </div>
          {/* Username input */}
          <div>
            <div className="flex items-center gap-0.5 mt-3">
              <UserCheck className="size-4" />
              <label htmlFor="username">
                <span className="text-xs font-medium">Username</span>
              </label>
            </div>
            <div>
              <input
                type="text"
                value={authenticatedUser.username}
                className="w-full bg-slate-40 border border-black/40 pl-3 rounded-[4px] h-10 focus:outline-none focus:border-black/80"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
