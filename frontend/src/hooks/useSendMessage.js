import { useState } from "react";
import { useChatContext } from "../context/ChatContext";

const useSendMessage = () => {
  const [sendingData, setSendingData] = useState(false);
  const { messages, setMessages, selectedChat } = useChatContext();

  const sendMessage = async (message, image) => {
    setSendingData(true);
    try {
      const res = await fetch(`/api/messages/send/${selectedChat._id}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message, image }),
      });
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
      setMessages([...messages, data]);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setSendingData(false);
    }
  };
  return { sendMessage, sendingData };
};

export default useSendMessage;
