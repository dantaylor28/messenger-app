import React, { useState } from "react";
import useUpdateProfile from "../hooks/useUpdateProfile";
import { useAuthContext } from "../context/AuthContext";
import { Mail, Pen, User, UserCheck } from "lucide-react";

const Profile = () => {
  // const { sendingData, setSendingData, updateProfile } = useUpdateProfile();
  const { authenticatedUser } = useAuthContext();
  const [isFullNameDisabled, setFullNameIsDisabled] = useState(true);
  const [fullName, setFullName] = useState(authenticatedUser.fullName);
  const [isUsernameDisabled, setUsernameIsDisabled] = useState(true);
  const [username, setUsername] = useState(authenticatedUser.username);

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
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                disabled={isFullNameDisabled}
                className={`w-full pl-3 rounded-[4px] h-10 focus:outline-none border border-black/40 ${
                  isFullNameDisabled
                    ? "bg-gray-100 text-gray-600 cursor-not-allowed"
                    : "bg-slate-40 text-black focus:border-black/80"
                }`}
              />
              <button
                className="cursor-pointer opacity-70 hover:opacity-100 transition"
                onClick={() => setFullNameIsDisabled(false)}
              >
                <Pen className="size-4" />
              </button>
            </div>
          </div>
          {/* Username input */}
          <div className="mt-3">
            <div className="flex items-center gap-0.5">
              <UserCheck className="size-4" />
              <label htmlFor="username">
                <span className="text-xs font-medium">Username</span>
              </label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                disabled={isUsernameDisabled}
                className={`w-full pl-3 rounded-[4px] h-10 focus:outline-none border border-black/40 ${
                  isUsernameDisabled
                    ? "bg-gray-100 text-gray-600 cursor-not-allowed"
                    : "bg-slate-40 text-black focus:border-black/80"
                }`}
              />
              <button
                className="cursor-pointer opacity-70 hover:opacity-100 transition"
                onClick={() => setUsernameIsDisabled(false)}
              >
                <Pen className="size-4" />
              </button>
            </div>
          </div>

          {/* Email input */}
          <div className="mt-3">
            <div className="flex items-center gap-0.5">
              <Mail className="size-4" />
              <label htmlFor="email">
                <span className="text-xs font-medium">Email</span>
              </label>
            </div>
            <div>
              <input
                type="email"
                value={authenticatedUser.email}
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
