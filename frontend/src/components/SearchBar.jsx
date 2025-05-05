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
        className="text-white md:text-black dark:text-white placeholder:text-white/70 md:placeholder:text-black/40 dark:placeholder:text-white/50 bg-[#e29753] md:bg-white dark:bg-white/10 border border-white/60 focus:border-white/90 dark:border-white/20 md:border-black/20 focus:outline-none md:focus:border-black/40 dark:focus:border-white/40 w-full h-9 rounded-sm text-md pl-2 shadow-sm cursor-text"
      />
      <button
        type="submit"
        className="absolute inset-y-0 end-0 items-center pe-3"
        onClick={onSearchBarClick}
      >
        <Search className="h-[22px] w-[22px] text-white/80 hover:text-white/100 md:text-amber-700 dark:text-amber-500 dark:hover:text-amber-600 md:hover:text-amber-800 hover:scale-105 transition" />
      </button>
    </form>
  );
};

export default SearchBar;
