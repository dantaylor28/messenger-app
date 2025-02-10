import React from "react";
import Chat from "./Chat";
import useGetChats from "../hooks/useGetChats";
import useListenForMessages from "../hooks/useListenForMessages";
import SidebarSkeleton from "./SidebarSkeleton"

const Chats = ({ onChatClick }) => {
  const { sendingData, chats } = useGetChats();
  useListenForMessages();
  return (
    <div className="flex flex-col overflow-auto mt-8 w-full px-3">
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
