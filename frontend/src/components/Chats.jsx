import React from "react";
import Chat from "./Chat";
import useGetChats from "../hooks/useGetChats";

const Chats = () => {
  const { sendingData, chats } = useGetChats();
  return (
    <div className="flex flex-col overflow-auto mt-8 w-full px-3">
      {chats.map((chat) => (
        <Chat key={chat._id} chat={chat} />
      ))}
      <div className="flex items-center justify-center p-2">
        {sendingData ? (
          <div className="animate-spin h-5 w-5 rounded-full border-b-2 border-cyan-800"></div>
        ) : null}
      </div>
    </div>
  );
};

export default Chats;
