import React from "react";
import useLogout from "../hooks/useLogout";
import { CiLogout } from "react-icons/ci";

const LogoutBtn = () => {
  const { sendingData, logoutUser } = useLogout();
  return (
    <div className="mt-auto">
      {!sendingData ? (<div className="cursor-pointer" onClick={logoutUser}>
        <CiLogout className="h-8 w-8 text-cyan-600 hover:text-cyan-700 hover:scale-110 transition"/>
      </div>) : (
        <span>
          Loading..
        </span>
      )}
    </div>
  );
};

export default LogoutBtn;
