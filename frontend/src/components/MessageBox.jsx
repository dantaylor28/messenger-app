import React, { useEffect } from "react";
import Messages from "./Messages";
import MessageBar from "./MessageBar";
import { useChatContext } from "../context/ChatContext";
import { useAuthContext } from "../context/AuthContext";
import { MessagesSquare } from "lucide-react";

const MessageBox = () => {
  const { selectedChat, setSelectedChat } = useChatContext();

  // Removes selectedChat on sign out - cleanup function
  useEffect(() => {
    return () => setSelectedChat(null);
  }, [setSelectedChat]);

  return (
    <div className="flex flex-col md:w-[500px] lg:w-[700px] xl:w-[800px] h-screen">
      {!selectedChat ? (
        <SelectChat />
      ) : (
        <>
          <div className="flex gap-4 items-center ml-10 mt-4">
            <div className="w-14 h-14 rounded-full border border-black/10 hover:cursor-pointer">
              <img
                src={selectedChat.profileImage}
                alt="user avatar"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div>
              <p className="tracking-wide capitalize font-light">
                {selectedChat.fullName}
              </p>
            </div>
          </div>
          <hr className="my-4 mx-8" />

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
    <div className="flex flex-col items-center justify-center w-[100vw] md:w-full h-full mb-40">
      <div className="size-20 rounded-xl flex items-center justify-center bg-amber-400/30 mb-4 group hover:bg-amber-400/35 animate-bounce">
        <MessagesSquare className="size-10 text-amber-800 group-hover:text-amber-900" />
      </div>
      <div className="text-center mt-3">
        <p className="capitalize font-medium text-2xl tracking-wide">Welcome {authenticatedUser.fullName}!</p>
        <p className="mt-2 text-md font-light">Select a chat and start messaging</p>
      </div>
    </div>
  );
};
