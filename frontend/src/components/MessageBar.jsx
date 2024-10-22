import React, { useState } from "react";
import useSendMessage from "../hooks/useSendMessage";

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
      <div className="w-full relative">
        <input
          type="text"
          placeholder="Enter message"
          className="w-full border border-black"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          type="submit"
          className="absolute inset-y-0 end-0 items-center pe-3"
        >
          {sendingData ? <span>Loading..</span> : "Send"}
        </button>
      </div>
    </form>
  );
};

export default MessageBar;
