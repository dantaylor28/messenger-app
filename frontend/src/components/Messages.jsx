import React, { useEffect, useRef } from "react";
import Message from "./Message";
import useGetMessages from "../hooks/useGetMessages";

const Messages = () => {
  const { messages, sendingData } = useGetMessages();
  const currentMessageRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      currentMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages]);

  return (
    <div className="flex-1 overflow-auto px-4">
      {!sendingData && messages.length === 0 && (
        <p>Send a message to start the chat!</p>
      )}
      {sendingData && "Loading messages.."}

      {!sendingData &&
        messages.length > 0 &&
        messages.map((message) => (
          <div key={message._id} ref={currentMessageRef}>
            <Message message={message} />
          </div>
        ))}
    </div>
  );
};

export default Messages;
