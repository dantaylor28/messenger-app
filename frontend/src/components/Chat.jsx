import React from "react";

const Chat = ({chat}) => {
  return (
    <>
      <div className="flex gap-2 items-center cursor-pointer">
        <div>
          <div className="w-12 rounded-full">
            <img
              src={chat.profileImage}
              alt="user avatar"
            />
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p>{chat.fullName}</p>
            <span className="h-3 w-3 rounded-full bg-green-500 mt-1.5"></span>
          </div>
        </div>
      </div>

      <div className="h-1 bg-gray-200"/> 
    </>
  );
};

export default Chat;
