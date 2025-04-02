import React from "react";
import { useChatContext } from "../context/ChatContext";
import { useSocketContext } from "../context/SocketContext";

const Chat = ({ chat, onClick, lastIndex }) => {
  const { selectedChat, setSelectedChat } = useChatContext();

  const isSelected = selectedChat?._id === chat._id;
  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(chat._id);

  const handleClick = () => {
    // Check if onClick is defined and then call it
    if (onClick) {
      onClick();
    }
    setSelectedChat(chat);
  };
  return (
    <>
      <div
        className={`flex gap-4 py-2 px-2 rounded-sm items-center cursor-pointer ${
          isSelected ? "bg-cyan-700/60 md:bg-amber-500/50" : "hover:bg-cyan-700/60 md:hover:bg-amber-500/20"
        }`}
        onClick={handleClick}
      >
        <div className="py-1.5">
          <div className="w-10 md:w-12 h-10 md:h-12 rounded-full border border-black/10 relative">
            <img src={chat.profileImage} alt="user avatar" className="w-full h-full object-cover rounded-full" />
            <span
              className={`h-3 w-3 rounded-full ${
                isOnline ? "bg-green-500" : "hidden"
              } absolute top-[-1px] right-[3.5px]`}
            ></span>
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <div>
            <p className="tracking-wide capitalize font-medium opacity-75">
              {chat.fullName}
            </p>
            <span className="font-light text-sm opacity-80">{isOnline ? "Online" : "Offline"}</span>
          </div>
        </div>
      </div>
      {!lastIndex && (
        <hr className="bg-white opacity-20 md:bg-none md:opacity-100" />
      )}
    </>
  );
};

export default Chat;
