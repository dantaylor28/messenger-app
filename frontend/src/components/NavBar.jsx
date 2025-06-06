import React from "react";
import { MessagesSquare, Settings, User } from "lucide-react";
import { useAuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";
import LogoutBtn from "./LogoutBtn";
import MobileSidebar from "./MobileSidebar";
import ColorTheme from "./ColorTheme";

const NavBar = () => {
  const { authenticatedUser } = useAuthContext();
  return (
    <header className="flex items-center bg-amber-600/60 dark:bg-white/5 h-16">
      {authenticatedUser && <MobileSidebar />}
      {/* Logo */}
      <Link
        className="hidden md:flex size-12 rounded-xl items-center justify-center bg-white/70 dark:bg-white/10 ml-8"
        to="/"
      >
        <MessagesSquare className="size-6 text-amber-800 dark:text-amber-500" />
      </Link>
      <div className="flex ml-auto">
        {authenticatedUser && (
          <>
            <Link
              className="flex items-center mr-4 cursor-pointer bg-amber-600/40 dark:bg-white/10 p-2 rounded-full hover:bg-amber-600/55 dark:hover:bg-white/20 transition gap-1"
              to="/profile"
            >
              <User className="size-5 text-white" />
              <p className="text-xs font-semibold text-white">Profile</p>
            </Link>
            <LogoutBtn />
          </>
        )}
        {/* <Link className="flex items-center mr-4 cursor-pointer bg-amber-600/40 p-2 rounded-full hover:bg-amber-600/55 transition gap-1">
          <Settings className="size-5 text-white" />
          <p className="text-xs font-semibold text-white">Settings</p>
        </Link> */}
        <ColorTheme />
      </div>
    </header>
  );
};

export default NavBar;
