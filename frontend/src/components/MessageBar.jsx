import React, { useState } from "react";
import useSendMessage from "../hooks/useSendMessage";
import { IoSend } from "react-icons/io5";

const MessageBar = () => {
  const [message, setMessage] = useState("");
  const { sendingData, sendMessage } = useSendMessage();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message) return;
    await sendMessage(message);
    setMessage("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="relative">
        <input
          type="text"
          placeholder="Enter message"
          className="border-y border-r border-black/20 w-full h-12 rounded-sm text-md pl-2 shadow-sm cursor-text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          type="submit"
          className="absolute inset-y-0 end-0 items-center pe-3"
        >
          {sendingData ? <span>Loading..</span> : <IoSend className="h-[22px] w-[22px] text-cyan-600 hover:text-cyan-700 hover:translate-x-0.5 transition hover:cursor-pointer"/>}
        </button>
      </div>
    </form>
  );
};

export default MessageBar;
