import React from "react";
import Message from "./Message";
import useGetMessages from "../hooks/useGetMessages";

const Messages = () => {
  const { messages, sendingData } = useGetMessages();
  console.log(messages);
  return (
    <div className="flex-1 overflow-auto px-4">
      {sendingData && "Loading messages.."}
    </div>
  );
};

export default Messages;
