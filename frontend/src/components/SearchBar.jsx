import React, { useState } from "react";
import { useChatContext } from "../context/ChatContext";
import useGetChats from "../hooks/useGetChats";
import toast from "react-hot-toast";
import { Search } from 'lucide-react';

const SearchBar = ({ onSearchBarClick }) => {
  const [search, setSearch] = useState("");
  const { setSelectedChat } = useChatContext();
  const { chats } = useGetChats();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    if (search.length < 3) {
      return toast.error("Search must contain 3 or more characters");
    }
    const chat = chats.find((chat) =>
      chat.fullName.toLowerCase().includes(search.toLowerCase())
    );

    if (chat) {
      setSelectedChat(chat);
      setSearch("");
    } else {
      toast.error("No such user can be found");
    }
  };

  return (
    <form
      className="flex items-center gap-2 relative w-full"
      onSubmit={handleSubmit}
    >
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Search contacts"
        className="text-white md:text-black placeholder:text-white/70 md:placeholder:text-black/40 bg-[#e29753] md:bg-white border border-white/70 md:border-black/20 md:focus:outline-none md:focus:border-black/40 w-full h-9 rounded-sm text-md pl-2 shadow-sm cursor-text"
      />
      <button
        type="submit"
        className="absolute inset-y-0 end-0 items-center pe-3"
        onClick={onSearchBarClick}
      >
        <Search className="h-[22px] w-[22px] text-white/80 hover:text-white/100 md:text-amber-700 md:hover:text-amber-800 hover:scale-105 transition" />
      </button>
    </form>
  );
};

export default SearchBar;
