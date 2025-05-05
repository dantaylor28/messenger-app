import { useEffect, useRef, useState } from "react";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import SearchBar from "./SearchBar";
import Chats from "./Chats";
import { useNavigate } from "react-router-dom";

const MobileSidebar = () => {
  const [expanded, setExpanded] = useState(false);
  const sidebarRef = useRef(null);
  const navigate = useNavigate();

  // Close sidebar when a chat/search is selected/made
  const handleSidebarClick = () => {
    setExpanded(false);
    navigate("/");
  };

  // Close sidebar when a user clicks outside it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setExpanded(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      {expanded ? (
        <button
          className="md:hidden flex fixed top-5 left-6 z-20 text-2xl text-white"
          onClick={() => setExpanded(!expanded)}
        >
          <RxCross1 />
        </button>
      ) : (
        <button
          className="md:hidden flex items-center ml-6 z-20 text-2xl text-white"
          onClick={() => setExpanded(!expanded)}
        >
          <RxHamburgerMenu />
        </button>
      )}
      <div
        ref={sidebarRef}
        className={`flex md:hidden top-0 left-0 w-[70vw] py-10 px-4 sm:pr-12 sm:pl-8 fixed h-full bg-[#e29753] dark:bg-zinc-800 text-white z-10 ease-in-out duration-700 ${
          expanded ? "-translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col w-full pt-10">
          <SearchBar onSearchBarClick={handleSidebarClick} />
          <Chats onChatClick={handleSidebarClick} />
        </div>
      </div>
    </>
  );
};

export default MobileSidebar;
