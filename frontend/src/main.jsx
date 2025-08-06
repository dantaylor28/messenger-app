import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext.jsx";
import { ChatContextProvider } from "./context/ChatContext.jsx";
import { SocketContextProvider } from "./context/SocketContext.jsx";
import { GoogleOAuthProvider } from '@react-oauth/google';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="699535308576-2a34nftmj4uekj318pub55f4fgvtf097.apps.googleusercontent.com">
      <BrowserRouter>
        <AuthContextProvider>
          <ChatContextProvider>
            <SocketContextProvider>
              <App />
            </SocketContextProvider>
          </ChatContextProvider>
        </AuthContextProvider>
      </BrowserRouter>
    </GoogleOAuthProvider>
  </React.StrictMode>
);
