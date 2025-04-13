import React from "react";
import { useChatContext } from "../context/ChatContext";
import { useAuthContext } from "../context/AuthContext";
import { formatTime } from "../../utils/formatTime";

const Message = ({ message }) => {
  const { selectedChat } = useChatContext();
  const { authenticatedUser } = useAuthContext();
  const sentFromMe = message.senderId === authenticatedUser._id;
  const profileImage = sentFromMe
    ? authenticatedUser.profileImage
    : selectedChat?.profileImage;
  const chatBubbleLayout = sentFromMe ? "justify-end" : "items-start";
  const chatBubbleBg = sentFromMe ? `${message.image ? "bg-gray-100 text-amber-900" : "bg-amber-600/80 text-white"}` : "";
  const timeLayout = sentFromMe ? "justify-end mr-14" : "items-start ml-14";
  const formattedTime = formatTime(message.createdAt);
  const PingAnimation = message.shouldPing ? "ping" : "";

  const chatBubble = (
    <>
      <div
        className={`border p-2 ${message.image ? "rounded-md border-gray-300/50" : "rounded-xl border-amber-700/15"} max-w-[35%] break-words ${chatBubbleBg} ${PingAnimation}`}
      >
        {message.image && (
          <img 
          src={message.image}
          alt="Image attachment"
          className="sm:max-w-[200px] mb-2"/>
        )}
        {message.message && <p>{message.message}</p>}
      </div>
    </>
  );

  return (
    <div className="flex-col mb-3">
      <div className={`flex space-x-3 ${chatBubbleLayout}`}>
        {sentFromMe ? chatBubble : ""}
        <div className="h-10 w-10 rounded-full border flex">
          <img src={profileImage} alt="chat user avatar" className="w-full h-full object-cover rounded-full" />
        </div>
        {sentFromMe ? "" : chatBubble}
      </div>
      <div className={`flex text-xs mt-1 ${timeLayout}`}>{formattedTime}</div>
    </div>
  );
};

export default Message;
