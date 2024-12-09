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
        <div className="flex flex-col items-center w-full mt-40">
          <p className="text-center mt-3 text-xl font-extralight tracking-wide">
            Send a message to start the chat!
          </p>
        </div>
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
