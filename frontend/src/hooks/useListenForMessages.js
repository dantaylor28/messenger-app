import React, { useEffect } from "react";
import { useSocketContext } from "../context/SocketContext";
import { useChatContext } from "../context/ChatContext";
import notification from "../assets/sounds/notification.mp3";

const useListenForMessages = () => {
  const { socket } = useSocketContext();
  const { messages, setMessages } = useChatContext();

  useEffect(() => {
    socket?.on("newMessage", (newMessage) => {
      newMessage.shouldPing = true;
      const sound = new Audio(notification);
      sound.play();
      setMessages([...messages, newMessage]);
    });

    return () => socket?.off("newMessage");
  }, [socket, setMessages, messages]);
};

export default useListenForMessages;
