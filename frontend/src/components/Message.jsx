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
  const chatBubbleBg = sentFromMe ? "bg-green-500" : "";
  const timeLayout = sentFromMe ? "justify-end mr-14" : "items-start ml-14";
  const formattedTime = formatTime(message.createdAt);

  const chatBubble = (
    <>
      <div className={`border border-black/15 p-2 rounded-xl max-w-[35%] ${chatBubbleBg}`}>
        {message.message}
      </div>
    </>
  );

  return (
    <div className="flex-col mb-3">
      <div className={`flex space-x-3 ${chatBubbleLayout}`}>
        {sentFromMe ? chatBubble : ""}
        <div className="h-10 w-10 rounded-full border flex">
          <img src={profileImage} alt="chat user avatar" />
        </div>
        {sentFromMe ? "" : chatBubble}
      </div>
      <div className={`flex text-xs mt-1 ${timeLayout}`}>{formattedTime}</div>
    </div>
  );
};

export default Message;
