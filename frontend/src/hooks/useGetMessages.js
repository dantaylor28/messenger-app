import React, { useEffect, useState } from "react";
import { useChatContext } from "../context/ChatContext";

const useGetMessages = () => {
  const [sendingData, setSendingData] = useState(false);
  const { messages, setMessages, selectedChat } = useChatContext();

  useEffect(() => {
    const getMessages = async () => {
      setSendingData(true);
      try {
        const res = await fetch(`/api/messages/${selectedChat._id}`);
        const data = await res.json();
        if (data.error) {
          throw new Error(data.error);
        }
        setMessages(data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setSendingData(false);
      }
    };
    if (selectedChat?._id) getMessages();
  }, [selectedChat?._id, setMessages]);

  return { messages, sendingData };
};

export default useGetMessages;
