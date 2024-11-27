import React, { useEffect } from "react";
import Messages from "./Messages";
import MessageBar from "./MessageBar";
import { useChatContext } from "../context/ChatContext";
import { useAuthContext } from "../context/AuthContext";

const MessageBox = () => {
  const { selectedChat, setSelectedChat } = useChatContext();

  // Removes selectedChat on sign out - cleanup function
  useEffect(() => {
    return () => setSelectedChat(null);
  }, [setSelectedChat]);

  return (
    <div className="flex flex-col w-[800px] h-[700px]">
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
  const {authenticatedUser} = useAuthContext()
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="">
        <p>Hi {authenticatedUser.fullName}👋</p>
        <p>Choose a chat to begin!</p>
      </div>
    </div>
  );
};
