import React, { useEffect, useState } from "react";

const useGetChats = () => {
  const [sendingData, setSendingData] = useState(false);
  const [chats, setChats] = useState([]);

  useEffect(() => {
    const getChats = async () => {
      setSendingData(true);
      try {
        const res = await fetch("/api/users");
        const data = await res.json();
        if (data.error) {
          throw new Error(data.error);
        }
        setChats(data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setSendingData(false);
      }
    };
    getChats();
  }, []);
  return { sendingData, chats };
};

export default useGetChats;
