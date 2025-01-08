import React, { useEffect } from "react";
import { useSocketContext } from "../context/SocketContext";
import { useChatContext } from "../context/ChatContext";

const useListenForMessages = () => {
  const { socket } = useSocketContext();
  const { messages, setMessages } = useChatContext();

  useEffect(() => {
    socket?.on("newMessage", (newMessage) => {
      setMessages([...messages, newMessage]);
    });

    return () => socket?.off("newMessage");
  }, [socket, setMessages, messages]);
};

export default useListenForMessages;
