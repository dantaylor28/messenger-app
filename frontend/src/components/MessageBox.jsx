import React, { useEffect } from "react";
import Messages from "./Messages";
import MessageBar from "./MessageBar";
import { useChatContext } from "../context/ChatContext";
import { useAuthContext } from "../context/AuthContext";
import { PiHandWavingThin } from "react-icons/pi";

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
  const { authenticatedUser } = useAuthContext();
  return (
    <div className="flex flex-col items-center justify-center w-full h-full mb-40">
      <div>
        <PiHandWavingThin className="h-32 w-32 items-center justify-center text-cyan-800" />
      </div>
      <div className="text-center mt-3 text-xl font-extralight tracking-wide">
        <p>Hey {authenticatedUser.fullName}!</p>
        <p>Select a chat and start messaging!😃</p>
      </div>
    </div>
  );
};
