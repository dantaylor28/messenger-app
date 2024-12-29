import React, { useState } from "react";
import { useChatContext } from "../context/ChatContext";
import useGetChats from "../hooks/useGetChats";
import toast from "react-hot-toast"
import { FaMagnifyingGlass } from "react-icons/fa6";

const SearchBar = () => {
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
    <form className="flex items-center gap-2 relative w-full" onSubmit={handleSubmit}>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Search for a user"
        className="text-white md:text-black placeholder:text-white/50 md:placeholder:text-black/40 bg-cyan-800 md:bg-white border border-white/50 md:border-black/20 w-full h-9 rounded-sm text-md pl-2 shadow-sm cursor-text"
      />
      <button
          type="submit"
          className="absolute inset-y-0 end-0 items-center pe-3"
        >
          <FaMagnifyingGlass className="text-white/60 hover:text-white/80 md:text-cyan-600 md:hover:text-cyan-700 hover:scale-105 transition" />
        </button>
    </form>
  );
};

export default SearchBar;
