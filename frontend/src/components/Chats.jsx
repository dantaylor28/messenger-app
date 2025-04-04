import React from "react";
import Chat from "./Chat";
import useGetChats from "../hooks/useGetChats";
import useListenForMessages from "../hooks/useListenForMessages";
import SidebarSkeleton from "./SidebarSkeleton"
import { Users } from 'lucide-react';

const Chats = ({ onChatClick }) => {
  const { sendingData, chats } = useGetChats();
  useListenForMessages();
  return (
    <div className="flex flex-col overflow-auto mt-8 w-full md:pr-6 lg:pr-10 xl:pr-12">
      <div className="flex items-center gap-2 mb-5 px-5 py-3 border-b border-white/50 md:border-black/30">
        <Users className="size-6 text-white/90 md:text-amber-700" />
        <span className="font-medium md:opacity-75">Contacts</span>
      </div>
      {chats.map((chat, idx) => (
        <Chat
          key={chat._id}
          chat={chat}
          onClick={onChatClick}
          lastIndex={idx === chats.length - 1}
        />
      ))}
      <div className="flex flex-col items-center justify-center p-2">
        {sendingData && [...Array(6)].map((_, index) => <SidebarSkeleton key={index} />)}
      </div>
    </div>
  );
};

export default Chats;
