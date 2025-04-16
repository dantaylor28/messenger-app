import React, { useEffect } from "react";
import { useSocketContext } from "../context/SocketContext";
import { useChatContext } from "../context/ChatContext";
import notification from "../assets/sounds/notification.mp3";

const useListenForMessages = () => {
  const { socket } = useSocketContext();
  const { messages, setMessages } = useChatContext();
  const { selectedChat } = useChatContext();

  useEffect(() => {
    socket?.on("newMessage", (newMessage) => {
      const sentFromSelectedUser = newMessage.senderId === selectedChat._id;
      if (!sentFromSelectedUser) return;
      newMessage.shouldPing = true;
      const sound = new Audio(notification);
      sound.play();
      setMessages([...messages, newMessage]);
    });

    return () => socket?.off("newMessage");
  }, [socket, setMessages, messages]);
};

export default useListenForMessages;
