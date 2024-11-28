import React, { useState } from "react";
import { useChatContext } from "../context/ChatContext";
import useGetChats from "../hooks/useGetChats";
import toast from "react-hot-toast"

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
    <form className="flex items-center gap-2" onSubmit={handleSubmit}>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Search for a user"
        className="border border-black/20 w-full h-9 rounded-sm text-md pl-2 shadow-sm cursor-text"
      />
      <button type="submit" className="w-24 h-9 rounded-sm bg-cyan-600 text-white border border-black/10 hover:bg-cyan-700 cursor-pointer">Search</button>
    </form>
  );
};

export default SearchBar;
