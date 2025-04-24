import React from "react";
import useLogout from "../hooks/useLogout";
import { LogOut } from "lucide-react";

const LogoutBtn = () => {
  const { sendingData, logoutUser } = useLogout();
  return (
    <div className="flex">
      <button
        onClick={logoutUser}
        className="flex items-center mr-4 cursor-pointer bg-amber-600/40 dark:bg-white/15 p-2 rounded-full hover:bg-amber-600/55 dark:hover:bg-white/25 transition gap-1"
      >
        <LogOut className="size-5 text-white" />
        {!sendingData ? (
          <p className="text-xs font-semibold text-white">Logout</p>
        ) : (
          <span className="animate-spin h-3 w-3 rounded-full border-b-2 border-white"></span>
        )}
      </button>
    </div>
  );
};

export default LogoutBtn;
