import React, { useState } from "react";
import useUpdateProfile from "../hooks/useUpdateProfile";
import { useAuthContext } from "../context/AuthContext";
import { Camera, Mail, Pen, User, UserCheck } from "lucide-react";

const Profile = () => {
  const { sendingData, updateProfile } = useUpdateProfile();
  const { authenticatedUser } = useAuthContext();
  const [selectedImage, setSelectedImage] = useState(null);

  const [isFullNameDisabled, setFullNameIsDisabled] = useState(true);
  const [fullName, setFullName] = useState(authenticatedUser.fullName);
  const [isUsernameDisabled, setUsernameIsDisabled] = useState(true);
  const [username, setUsername] = useState(authenticatedUser.username);
  const [isEmailDisabled, setEmailIsDisabled] = useState(true);
  const [email, setEmail] = useState(authenticatedUser.email);

  const [hasUpdates, setHasUpdates] = useState(false);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = async () => {
      const base64Image = reader.result;
      setSelectedImage(base64Image);
      setHasUpdates(true);
      await updateProfile({ profileImage: base64Image });
    };

    const handleSaveUpdates = async () => {
      await updateProfile({
        fullName,
        username,
        email,
        profileImage: selectedImage,
      });
      setHasUpdates(false);
    };
  };
  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-2xl font-medium tracking-widest mt-10">
          My Profile
        </h1>
        <h2 className="mt-4 font-light">Personal Information</h2>
        {/* update name, username, email, password section */}
      </div>
      <div className="flex items-center justify-center">
        <div className="w-[30%]">
          {/* Update Profile Image Section */}
          <div className="flex flex-col items-center mt-3">
            <div className="relative">
              <img
                src={selectedImage || authenticatedUser.profileImage}
                alt="Profile Image"
                className="size-48 rounded-full object-cover border-4 border-gray-200"
              />
              <label
                htmlFor="profile-image-input"
                className="absolute bottom-0 right-7 p-2 bg-amber-500/90 hover:bg-amber-500 transition text-white/80 rounded-full"
              >
                <Camera className="h-5 w-5" />
                <input
                  type="file"
                  className="hidden"
                  id="profile-image-input"
                  accept="image/*"
                  onChange={handleImageUpload}
                />
              </label>
            </div>
            <p className="text-xs opacity-60 mt-1">
              {sendingData ? "Uploading.." : "Update your profile image"}
            </p>
          </div>

          {/* Full name input */}
          <div>
            <div className="flex items-center gap-0.5 mt-2">
              <User className="size-4" />
              <label htmlFor="full-name">
                <span className="text-xs font-medium">Full Name</span>
              </label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={fullName}
                onChange={(e) => {
                  setFullName(e.target.value);
                  setHasUpdates(true);
                }}
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
                onChange={(e) => {
                  setUsername(e.target.value);
                  setHasUpdates(true);
                }}
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
            <div className="flex items-center gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setHasUpdates(true);
                }}
                disabled={isEmailDisabled}
                className={`w-full pl-3 rounded-[4px] h-10 focus:outline-none border border-black/40 ${
                  isEmailDisabled
                    ? "bg-gray-100 text-gray-600 cursor-not-allowed"
                    : "bg-slate-40 text-black focus:border-black/80"
                }`}
              />
              <button
                className="cursor-pointer opacity-70 hover:opacity-100 transition"
                onClick={() => setEmailIsDisabled(false)}
              >
                <Pen className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
