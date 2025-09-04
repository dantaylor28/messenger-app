import React, { useState } from "react";
import useUpdateProfile from "../hooks/useUpdateProfile";
import { useAuthContext } from "../context/AuthContext";
import GenderCheckbox from "../components/GenderCheckbox";
import {
  Camera,
  Mail,
  SquarePen,
  User,
  UserCheck,
  ArrowUpDown,
} from "lucide-react";

const Profile = () => {
  const { sendingData, updateProfile } = useUpdateProfile();
  const { authenticatedUser, setAuthenticatedUser } = useAuthContext();
  const [selectedImage, setSelectedImage] = useState(null);

  const [isFullNameDisabled, setFullNameIsDisabled] = useState(true);
  const [fullName, setFullName] = useState(authenticatedUser.fullName);
  const [isUsernameDisabled, setUsernameIsDisabled] = useState(true);
  const [username, setUsername] = useState(authenticatedUser.username);
  const [isEmailDisabled, setEmailIsDisabled] = useState(true);
  const [email, setEmail] = useState(authenticatedUser.email);
  const [isGenderDisabled, setGenderIsDisabled] = useState(true);
  const [gender, setGender] = useState(authenticatedUser.gender ?? "");
  const [isAgeDisabled, setAgeIsDisabled] = useState(true);
  const [age, setAge] = useState(authenticatedUser.age ?? "");

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
    };
  };

  const handleSaveUpdates = async () => {
    const updatedData = await updateProfile({
      fullName,
      username,
      email,
      gender,
      age,
      profileImage: selectedImage,
    });

    if (updatedData) {
      setAuthenticatedUser(updatedData);
      localStorage.setItem("authenticatedUser", JSON.stringify(updatedData));
      setHasUpdates(false);
    }
  };
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full sm:w-[70%] md:w-[55%] lg:w-[45%] xl:w-[35%] rounded-md px-4 sm:px-6 md:px-8 lg:px-12 pb-10 pt-4 bg-gray-200/30 dark:bg-white/10">
        <h1 className="font-medium text-center tracking-wider dark:text-white">
          Profile Information
        </h1>
        {/* Update Profile Image Section */}
        <div className="flex">
          <p className="text-sm mb-1 mt-5 ml-4 dark:text-white">
            <span className="opacity-75">Member Since: </span>
            <span className="text-amber-600 dark:text-amber-500">
              {authenticatedUser.createdAt?.split("T")[0]}
            </span>
          </p>
          <p className="text-sm mb-1 mt-5 m-auto mr-4 dark:text-white">
            <span className="opacity-75">Account Status: </span>
            <span className="text-green-600 dark:text-green-500">Active</span>
          </p>
        </div>
        <div className="border-b border-black/20 py-2 dark:border-white/15"></div>
        <div className="flex flex-col items-center mt-5">
          <div className="relative">
            <img
              src={selectedImage || authenticatedUser.profileImage}
              alt="Profile Image"
              className="size-48 rounded-full object-cover border-4 border-gray-200 dark:border-white/40"
            />
            <label
              htmlFor="profile-image-input"
              className="absolute bottom-0 right-7 p-2 bg-amber-500/90 hover:bg-amber-500 transition text-white/80 rounded-full hover:cursor-pointer"
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
          <p className="text-xs opacity-60 mt-1 dark:text-white">
            {sendingData ? "Uploading.." : "Update your profile image"}
          </p>
        </div>

        {/* Update name, username, email, password section */}
        {/* Full name input */}
        <div>
          <div className="flex items-center gap-0.5 mt-2 dark:text-white">
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
              className={`w-full pl-3 rounded-[4px] h-10 focus:outline-none border border-black/40 dark:border-white/10 ${
                isFullNameDisabled
                  ? "bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-white/40 cursor-not-allowed"
                  : "bg-slate-40 dark:bg-white/15 text-black dark:text-white/80 focus:border-black/80 dark:focus:border-white/30"
              }`}
            />
            <button
              className="cursor-pointer transition text-amber-600 dark:text-amber-500 hover:text-amber-700 dark:hover:text-amber-600"
              onClick={() => setFullNameIsDisabled(false)}
            >
              <SquarePen className="size-5" />
            </button>
          </div>
        </div>
        {/* Username input */}
        <div className="mt-3">
          <div className="flex items-center gap-0.5 dark:text-white">
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
              className={`w-full pl-3 rounded-[4px] h-10 focus:outline-none border border-black/40 dark:border-white/10 ${
                isUsernameDisabled
                  ? "bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-white/40 cursor-not-allowed"
                  : "bg-slate-40 dark:bg-white/15 text-black dark:text-white/80 focus:border-black/80 dark:focus:border-white/30"
              }`}
            />
            <button
              className="cursor-pointer transition text-amber-600 dark:text-amber-500 hover:text-amber-700 dark:hover:text-amber-600"
              onClick={() => setUsernameIsDisabled(false)}
            >
              <SquarePen className="size-5" />
            </button>
          </div>
        </div>

        {/* Email input */}
        <div className="mt-3">
          <div className="flex items-center gap-0.5 dark:text-white">
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
              className={`w-full pl-3 rounded-[4px] h-10 focus:outline-none border border-black/40 dark:border-white/10 ${
                isEmailDisabled
                  ? "bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-white/40 cursor-not-allowed"
                  : "bg-slate-40 dark:bg-white/15 text-black dark:text-white/80 focus:border-black/80 dark:focus:border-white/30"
              }`}
            />
            <button
              className="cursor-pointer transition text-amber-600 dark:text-amber-500 hover:text-amber-700 dark:hover:text-amber-600"
              onClick={() => setEmailIsDisabled(false)}
            >
              <SquarePen className="size-5" />
            </button>
          </div>
        </div>

        {/* Gender input */}
        <div className="mt-3">
          <div className="flex items-center gap-0.5 dark:text-white">
            <User className="size-4" />
            <label htmlFor="gender">
              <span className="text-xs font-medium">Gender</span>
            </label>
          </div>
          <div
            className={`${
              isGenderDisabled ? "opacity-50 pointer-events-none" : ""
            }`}
          >
            <GenderCheckbox
              selectedGender={gender}
              onCheckboxChange={(value) => {
                setGender(value);
                setHasUpdates(true);
              }}
            />
          </div>
          <div className="flex justify-end">
            <button
              className="cursor-pointer transition text-amber-600 dark:text-amber-500 hover:text-amber-700 dark:hover:text-amber-600"
              onClick={() => setGenderIsDisabled(false)}
            >
              <SquarePen className="size-5" />
            </button>
          </div>
        </div>

        {/* Age input */}
        <div className="mt-3">
          <div className="flex items-center gap-0.5 dark:text-white">
            <ArrowUpDown className="size-4" />
            <label htmlFor="age">
              <span className="text-xs font-medium">Age</span>
            </label>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="number"
              value={age}
              onChange={(e) => {
                setAge(e.target.value);
                setHasUpdates(true);
              }}
              disabled={isAgeDisabled}
              className={`w-full pl-3 rounded-[4px] h-10 focus:outline-none border border-black/40 dark:border-white/10 ${
                isAgeDisabled
                  ? "bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-white/40 cursor-not-allowed"
                  : "bg-slate-40 dark:bg-white/15 text-black dark:text-white/80 focus:border-black/80 dark:focus:border-white/30"
              }`}
            />
            <button
              className="cursor-pointer transition text-amber-600 dark:text-amber-500 hover:text-amber-700 dark:hover:text-amber-600"
              onClick={() => setAgeIsDisabled(false)}
            >
              <SquarePen className="size-5" />
            </button>
          </div>
        </div>

        {/* Submit changes btn */}
        <div className="flex justify-center text-center mt-6">
          <button
            onClick={handleSaveUpdates}
            disabled={!hasUpdates || sendingData}
            className={`items-center w-full h-10 rounded-[4px] font-medium tracking-wider ${
              !hasUpdates || sendingData
                ? "bg-gray-300 dark:bg-white/15 text-gray-500 dark:text-gray-400 cursor-not-allowed"
                : "bg-amber-500/60 dark:bg-amber-500 hover:bg-amber-500/75 dark:hover:bg-amber-600 transition"
            }`}
          >
            Update Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
