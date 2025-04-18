import React, { useState } from "react";
import Chat from "./Chat";
import useGetChats from "../hooks/useGetChats";
import useListenForMessages from "../hooks/useListenForMessages";
import SidebarSkeleton from "./SidebarSkeleton";
import { Users } from "lucide-react";
import { useSocketContext } from "../context/SocketContext";

const Chats = ({ onChatClick }) => {
  const { sendingData, chats } = useGetChats();
  const { onlineUsers } = useSocketContext();
  const [showActiveUsers, setShowActiveUsers] = useState(false);
  const filteredUsers = showActiveUsers
    ? chats.filter((chat) => onlineUsers.includes(chat._id))
    : chats;
  useListenForMessages();
  return (
    <div className="flex flex-col overflow-auto mt-8 w-full md:pr-6 lg:pr-10 xl:pr-12">
      <div className="flex items-center gap-2 mb-3 px-5 py-3 border-b border-white/50 md:border-black/30">
        <Users className="size-6 text-white/90 md:text-amber-700" />
        <span className="font-medium md:opacity-75">Contacts</span>
      </div>
      <div className="flex items-center mb-5">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={showActiveUsers}
            onChange={(e) => setShowActiveUsers(e.target.checked)}
            className="cursor-pointer"
          />
          <span>Show active users</span>
        </label>
      </div>
      {filteredUsers.map((chat, idx) => (
        <Chat
          key={chat._id}
          chat={chat}
          onClick={onChatClick}
          lastIndex={idx === chats.length - 1}
        />
      ))}
      <div className="flex flex-col items-center justify-center p-2">
        {sendingData &&
          [...Array(6)].map((_, index) => <SidebarSkeleton key={index} />)}
      </div>
    </div>
  );
};

export default Chats;
