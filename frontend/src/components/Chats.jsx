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
      <div className="flex flex-col mb-5">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={showActiveUsers}
            onChange={(e) => setShowActiveUsers(e.target.checked)}
            className="appearance-none h-4 w-4 border-2 border-white outline outline-gray-300 rounded-sm bg-white checked:bg-amber-500 cursor-pointer ml-1"
          />
          <span className="text-sm cursor-pointer opacity-80">Show active users</span>
        </label>
        <span className="text-xs font-light opacity-90 pl-7">({onlineUsers.length - 1} online)</span>
      </div>
      {filteredUsers.map((chat, idx) => (
        <Chat
          key={chat._id}
          chat={chat}
          onClick={onChatClick}
          lastIndex={idx === chats.length - 1}
        />
      ))}
      {filteredUsers.length === 0 && (
        <div className="text-center py-8 font-light text-xs opacity-85 md:opacity-80">No active users</div>
      )}
      <div className="flex flex-col items-center justify-center p-2">
        {sendingData &&
          [...Array(6)].map((_, index) => <SidebarSkeleton key={index} />)}
      </div>
    </div>
  );
};

export default Chats;
