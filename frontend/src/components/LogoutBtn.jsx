import React from "react";
import useLogout from "../hooks/useLogout";
import { CiLogout } from "react-icons/ci";

const LogoutBtn = () => {
  const { sendingData, logoutUser } = useLogout();
  return (
    <div className="mt-auto">
      {!sendingData ? (<div className="cursor-pointer" onClick={logoutUser}>
        <CiLogout className="h-8 w-8 text-white/80 md:text-cyan-600 hover:text-white md:hover:text-cyan-700 hover:scale-110 transition"/>
      </div>) : (
        <div className="animate-spin h-5 w-5 rounded-full border-b-2 border-white sm:border-cyan-800"></div>
      )}
    </div>
  );
};

export default LogoutBtn;
