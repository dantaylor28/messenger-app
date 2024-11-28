import React from "react";
import Chat from "./Chat";
import useGetChats from "../hooks/useGetChats";

const Chats = () => {
  const { sendingData, chats } = useGetChats();  
  return (
    <div className="flex flex-col overflow-auto mt-8">
      {chats.map((chat) => (
        <Chat key={chat._id} chat={chat}/>
      ))}
      {sendingData ? <span>Loading..</span> : null}
    </div>
  );
};

export default Chats;
