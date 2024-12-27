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
    <div className="flex flex-col md:w-[500px] lg:w-[700px] xl:w-[800px] h-screen md:h-[700px]">
      {!selectedChat ? (
        <SelectChat />
      ) : (
        <>
          <div className="flex gap-4 items-center ml-10 mt-4">
            <div className="w-14 rounded-full border border-black/10">
              <img src={selectedChat.profileImage} alt="user avatar" />
            </div>
            <div>
              <p className="tracking-wide capitalize font-light">{selectedChat.fullName}</p>
            </div>
          </div>
          <hr className="my-4 mx-8"/>

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
        <p className="capitalize">Hey {authenticatedUser.fullName}!</p>
        <p>Select a chat and start messaging!😃</p>
      </div>
    </div>
  );
};
