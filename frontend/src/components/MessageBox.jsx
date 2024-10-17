import React from "react";
import Messages from "./Messages";
import MessageBar from "./MessageBar";
import { useChatContext } from "../context/ChatContext";

const MessageBox = () => {
  const {selectedChat, setSelectedChat} = useChatContext()
  return (
    <div className="flex flex-col min-w-[550px]">
      {!selectedChat ? (
        <SelectChat />
      ) : (
        <>
          <div className="bg-gray-200 px-2 py-4 mb-5">
            <span>To:</span> <span>{selectedChat.fullName}</span>
          </div>

          <Messages />
          <MessageBar />
        </>
      )}
    </div>
  );
};

export default MessageBox;

const SelectChat = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="">
        <p>Hi Dan Taylor👋</p>
        <p>Choose a chat to begin!</p>
      </div>
    </div>
  );
};
