import React, { useRef, useState } from "react";
import useSendMessage from "../hooks/useSendMessage";
import { Image, SendHorizonal, X } from "lucide-react";

const MessageBar = () => {
  const [message, setMessage] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const fileInputRef = useRef(null);
  const { sendingData, sendMessage } = useSendMessage();

  const handleChangeImage = (e) => {
    const file = e.target.files[0];
    if (!file.type.startsWith("image/")) {
      toast.error("Oops, this is not a valid image file");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const removeImage = () => {
    setImagePreview(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message && !imagePreview) return;
    await sendMessage(message, imagePreview);
    setMessage("");
    setImagePreview(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };
  return (
    <div>
      {imagePreview && (
        <div className="flex items-center justify-start">
          <div className="relative">
            <img
              src={imagePreview}
              alt="image preview"
              className="w-24 h-24 object-cover rounded-2xl mx-6 my-2"
            />
            <button
              onClick={removeImage}
              type="button"
              className="absolute -top-1 -right-0.5 bg-amber-500/90 hover:bg-amber-500 transition text-white/80 rounded-full hover:cursor-pointer"
            >
              <X className="size-5"/>
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
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleChangeImage}
            className="hidden"
          />
          <button
            type="button"
            onClick={() => {
              fileInputRef.current?.click();
            }}
            className={`absolute inset-y-0 end-14 ${
              imagePreview
                ? "text-orange-600"
                : "text-orange-400 hover:text-orange-500"
            }`}
          >
            <Image size={20} />
          </button>
          <button
            type="submit"
            className="absolute inset-y-0 end-0 items-center pe-3"
          >
            {sendingData ? (
              <div className="animate-spin h-5 w-5 rounded-full border-b-2 border-cyan-800"></div>
            ) : (
              <SendHorizonal
                className={`h-[22px] w-[22px] ${
                  !message && !imagePreview
                    ? "text-gray-400 cursor-not-allowed"
                    : "text-emerald-400 hover:text-emerald-500 hover:translate-x-0.5 transition hover:cursor-pointer"
                }`}
              />
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default MessageBar;
