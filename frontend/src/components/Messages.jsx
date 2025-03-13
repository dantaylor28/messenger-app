import React, { useEffect, useRef } from "react";
import Message from "./Message";
import useGetMessages from "../hooks/useGetMessages";
import { Send } from 'lucide-react';
import ChatSkeleton from "./ChatSkeleton";

const Messages = () => {
  const { messages, sendingData } = useGetMessages();
  const currentMessageRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      currentMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages]);

  return (
    <div className="flex-1 overflow-auto px-4 w-[100vw] md:w-full">
      {!sendingData && messages.length === 0 && (
        <div className="flex flex-col items-center w-full mt-36">
          <div className="size-20 rounded-xl flex items-center justify-center bg-amber-400/30 mb-4 group hover:bg-amber-400/35 animate-bounce">
            <Send className="size-10 text-amber-800 group-hover:text-amber-900" />
          </div>
          <p className="text-center mt-3 capitalize font-medium text-2xl tracking-wide">
            no chat history!
          </p>
          <p className="mt-2 text-md font-light">
            Send a message to start the chat
          </p>
        </div>
      )}
      {sendingData &&
        [...Array(4)].map((_, index) => <ChatSkeleton key={index} />)}

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
