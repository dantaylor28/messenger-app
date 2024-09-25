import React from "react";

const Message = () => {
  return (
    <div className="mb-3">
      <div className="flex items-center">
        <div>
          <div className="w-10 rounded-full">
            <img
              src="https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png"
              alt="chat user avatar"
            />
          </div>
        </div>
        <div className="border border-black p-2">Hello there! How's it going??</div>
      </div>
      <div className="text-xs ml-10">15:12</div>
    </div>
  );
};

export default Message;
