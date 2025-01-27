import React from "react";
import { MessagesSquare, Settings } from "lucide-react";


const NavBar = () => {
  return (
    <header className="flex items-center bg-amber-600/60 h-16">
      {/* Logo */}
      <div className="size-12 rounded-xl flex items-center justify-center bg-white/70 ml-8">
        <MessagesSquare className="size-6 text-amber-800" />
      </div>
      <div className="flex items-center ml-auto mr-8 cursor-pointer bg-amber-600/40 p-2 rounded-full hover:bg-amber-600/55 transition gap-1">
        <Settings className="size-5 text-white" />
        <p className="text-xs font-semibold text-white">Settings</p>
      </div>
    </header>
  );
};

export default NavBar;
