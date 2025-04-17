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
          isSelected ? "bg-[#cb874a]/90 md:bg-amber-500/50" : "hover:bg-[#cb874a]/40 md:hover:bg-amber-500/20"
        }`}
        onClick={handleClick}
      >
        <div className="py-1.5">
          <div className="w-10 md:w-10 h-10 md:h-10 rounded-full border border-black/10 relative">
            <img src={chat.profileImage} alt="user avatar" className="w-full h-full object-cover rounded-full" />
            <span
              className={`h-2.5 w-2.5 rounded-full ${
                isOnline ? "bg-green-500" : "hidden"
              } absolute top-[-2px] right-[3px]`}
            ></span>
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <div>
            <p className="tracking-wide capitalize font-normal opacity-90 md:opacity-75">
              {chat.fullName}
            </p>
            <span className="font-light text-xs opacity-85 md:opacity-80">{isOnline ? "Online" : "Offline"}</span>
          </div>
        </div>
      </div>
      {!lastIndex && (
        <hr className="bg-white opacity-20 md:bg-black md:opacity-60" />
      )}
    </>
  );
};

export default Chat;
