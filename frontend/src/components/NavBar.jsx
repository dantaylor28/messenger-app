import React from "react";
import { MessagesSquare } from "lucide-react";

const NavBar = () => {
  return (
    <div className="flex items-center bg-amber-600/60 h-16">
      {/* Logo */}
      <div className="size-12 rounded-xl flex items-center justify-center bg-white/70 ml-8">
        <MessagesSquare className="size-6 text-amber-800" />
      </div>
    </div>
  );
};

export default NavBar;
