import React from "react";
import SearchBar from "./SearchBar";
import Chats from "./Chats";

const Sidebar = () => {
  return (
    <div className="hidden md:flex flex-col md:min-w-[300px] lg:min-w-[350px] xl:min-w-[400px] border border-black/10 rounded-sm p-5">
      <SearchBar />
      <Chats />
    </div>
  );
};

export default Sidebar;
