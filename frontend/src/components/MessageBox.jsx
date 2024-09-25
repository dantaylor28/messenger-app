import React from "react";
import Messages from "./Messages";

const MessageBox = () => {
  return (
    <div className="flex flex-col min-w-[550px]">
      <>
        <div className="bg-gray-200 px-2 py-4">
            <span>To:</span> <span>Sabina Boije</span>
        </div>

        <Messages />
      </>
    </div>
  );
};

export default MessageBox;
