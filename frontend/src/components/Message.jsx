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
  const formattedTime = formatTime(message.createdAt);

  const chatBubble = <><div className="border border-black/15 p-2 rounded-xl max-w-[35%]">{message.message}</div></>

  return (
    // <div className={`mb-3 flex ${chatBubbleLayout}`}>
    //   <div className="flex items-center space-x-4">
    //     <div>
    //       <div className={`w-10 rounded-full ${profileImageLayout}`}>
    //         <img src={profileImage} alt="chat user avatar" />
    //       </div>
    //     </div>
    //     <div className={`border border-black p-2 rounded-lg ${chatBubbleBg}`}>
    //       {message.message}
    //     </div>
    //   </div>
    //   <div className="text-xs">{formattedTime}</div>
    // </div>

    <div className={`mb-3 flex space-x-3 ${chatBubbleLayout}`}>
      {sentFromMe ? (
        chatBubble
      ) : (
        ""
      )}
      <div className="h-10 w-10 rounded-full border flex">
        <img src={profileImage} alt="chat user avatar" />
      </div>
      {sentFromMe ? (
        ""
      ) : (
        chatBubble
      )}
    </div>
  );
};

export default Message;
