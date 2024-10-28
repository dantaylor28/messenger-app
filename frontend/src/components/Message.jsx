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
  const chatBubbleLayout = sentFromMe ? "ml-72" : "";
  const chatBubbleBg = sentFromMe ? "bg-green-500" : "";
  const formattedTime = formatTime(message.createdAt);

  return (
    <div className={`mb-3 ${chatBubbleLayout}`}>
      <div className="flex items-center">
        <div>
          <div className="w-10 rounded-full">
            <img src={profileImage} alt="chat user avatar" />
          </div>
        </div>
        <div className={`border border-black p-2 ${chatBubbleBg}`}>
          {message.message}
        </div>
      </div>
      <div className="text-xs ml-10">{formattedTime}</div>
    </div>
  );
};

export default Message;
