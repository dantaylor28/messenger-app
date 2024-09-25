import React from "react";

const Chat = () => {
  return (
    <>
      <div className="flex gap-2 items-center cursor-pointer">
        <div>
          <div className="w-12 rounded-full">
            <img
              src="https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png"
              alt="user avatar"
            />
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p>Dan Taylor</p>
            <span className="h-3 w-3 rounded-full bg-green-500 mt-1.5"></span>
          </div>
        </div>
      </div>

      <div className="h-1 bg-gray-200"/> 
    </>
  );
};

export default Chat;
