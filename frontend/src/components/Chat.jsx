import React from "react";
import { useChatContext } from "../context/ChatContext";
import { useSocketContext } from "../context/SocketContext";

const Chat = ({ chat, onClick, lastIndex }) => {
  const { selectedChat, setSelectedChat } = useChatContext();

  const isSelected = selectedChat?._id === chat._id;
  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(chat._id);
  return (
    <>
      <div
        className={`flex gap-4 py-2.5 px-2 rounded-sm items-center cursor-pointer hover:bg-cyan-700 md:hover:bg-gray-200 ${
          isSelected ? "bg-cyan-700 md:bg-gray-200" : ""
        }`}
        onClick={() => {
          setSelectedChat(chat);
          onClick();
        }}
      >
        <div className="py-1.5">
          <div className="w-12 md:w-14 rounded-full border border-black/10 relative">
            <img src={chat.profileImage} alt="user avatar" />
            <span
              className={`h-3 w-3 rounded-full ${
                isOnline ? "bg-green-500" : "bg-gray-300"
              } absolute top-[-1px] right-[3.5px]`}
            ></span>
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <div>
            <p className="tracking-wide capitalize font-light">
              {chat.fullName}
            </p>
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
