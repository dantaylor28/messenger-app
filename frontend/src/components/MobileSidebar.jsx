import { useEffect, useRef, useState } from "react";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import SearchBar from "./SearchBar";
import Chats from "./Chats";
import LogoutBtn from "./LogoutBtn";

const MobileSidebar = () => {
  const [expanded, setExpanded] = useState(false);
  const sidebarRef = useRef(null);

  // Close sidebar when a chat/search is selected/made
  const handleSidebarClick = () => {
    setExpanded(false);
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
          className="md:hidden flex fixed top-6 left-10 z-20 text-2xl text-white"
          onClick={() => setExpanded(!expanded)}
        >
          <RxCross1 />
        </button>
      ) : (
        <button
          className="md:hidden flex fixed top-6 left-10 z-20 text-2xl"
          onClick={() => setExpanded(!expanded)}
        >
          <RxHamburgerMenu />
        </button>
      )}
      <div
        ref={sidebarRef}
        className={`flex md:hidden top-0 left-0 w-[70vw] py-10 px-8 fixed h-full bg-cyan-800 text-white z-10 ease-in-out duration-700 ${
          expanded ? "-translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col justify-center w-full pt-10">
          <SearchBar onSearchBarClick={handleSidebarClick} />
          <Chats onChatClick={handleSidebarClick} />
          <LogoutBtn />
        </div>
      </div>
    </>
  );
};

export default MobileSidebar;
