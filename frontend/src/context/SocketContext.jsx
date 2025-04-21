import { createContext, useEffect, useState, useContext } from "react";
import { useAuthContext } from "./AuthContext";
import io from "socket.io-client";

const BASE_URL =
  import.meta.env.MODE === "development" ? "http://localhost:5173" : "/";

const SocketContext = createContext();

export const useSocketContext = () => {
  return useContext(SocketContext);
};

export const SocketContextProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const { authenticatedUser } = useAuthContext();

  useEffect(() => {
    if (authenticatedUser) {
      const socket = io(
        BASE_URL,
        {
          query: {
            userId: authenticatedUser._id,
          },
        },
        [authenticatedUser]
      );

      setSocket(socket);

      // socket.on() used to listen to the events, on both client and server side
      socket.on("onlineUsers", (users) => {
        setOnlineUsers(users);
      });

      return () => socket.close();
    } else {
      if (socket) {
        socket.close();
        setSocket(null);
      }
    }
  }, [authenticatedUser]);
  return (
    <SocketContext.Provider value={{ socket, onlineUsers }}>
      {children}
    </SocketContext.Provider>
  );
};
