import React, { useRef, useState } from "react";
import useSendMessage from "../hooks/useSendMessage";
import { SendHorizonal } from "lucide-react";

const MessageBar = () => {
  const [message, setMessage] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const fileInputRef = useRef(null);
  const { sendingData, sendMessage } = useSendMessage();

  const handleChangeImage = (e) => {};

  const removeImage = () => {};

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message) return;
    await sendMessage(message);
    setMessage("");
  };
  return (
    <div>
      {imagePreview && (
        <div className="flex">
          <div className="relative">
            <img
              src={imagePreview}
              alt="image preview"
              className="w-12 h-12 object-cover"
            />
            <button
              onClick={removeImage}
              type="button"
              className="absolute -top-1.5 -right-1-5 w-5 h-5"
            >
              X
            </button>
          </div>
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="relative">
          <input
            type="text"
            placeholder="Enter message"
            className="border-y border-r border-black/20 focus:outline-black/25 w-full h-12 rounded-sm text-md pl-2 shadow-sm cursor-text pr-12"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            type="submit"
            className="absolute inset-y-0 end-0 items-center pe-3"
          >
            {sendingData ? (
              <div className="animate-spin h-5 w-5 rounded-full border-b-2 border-cyan-800"></div>
            ) : (
              <SendHorizonal className="h-[22px] w-[22px] text-amber-600 hover:text-amber-700 hover:translate-x-0.5 transition hover:cursor-pointer" />
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default MessageBar;
