import React from "react";
import useLogout from "../hooks/useLogout";

const LogoutBtn = () => {
  const { sendingData, logoutUser } = useLogout();
  return (
    <div className="mt-auto">
      {!sendingData ? (<div className="cursor-pointer" onClick={logoutUser}>
        Logout
      </div>) : (
        <span>
          Loading..
        </span>
      )}
    </div>
  );
};

export default LogoutBtn;
