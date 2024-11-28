import React from "react";
import { useChatContext } from "../context/ChatContext";

const Chat = ({ chat }) => {
  const { selectedChat, setSelectedChat } = useChatContext();

  const isSelected = selectedChat?._id === chat._id;
  return (
    <>
      <div
        className={`flex gap-4 py-2.5 px-2 rounded-sm items-center cursor-pointer hover:bg-gray-200 ${
          isSelected ? "bg-gray-200" : ""
        }`}
        onClick={() => setSelectedChat(chat)}
      >
        <div>
          <div className="w-14 rounded-full border border-black/10">
            <img src={chat.profileImage} alt="user avatar" />
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="tracking-wide capitalize">{chat.fullName}</p>
            <span className="h-3 w-3 rounded-full bg-green-500 mt-1.5"></span>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Chat;
