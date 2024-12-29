import { useState } from "react";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import SearchBar from "./SearchBar";

const MobileSidebar = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <>
    {expanded ? (
        <button className="md:hidden flex fixed top-6 left-10 z-20 text-2xl text-white" onClick={() => setExpanded(!expanded)}>
            <RxCross1 />
        </button>
    ) : (
        <button className="md:hidden flex fixed top-6 left-10 z-20 text-2xl" onClick={() => setExpanded(!expanded)}>
            <RxHamburgerMenu />
        </button>
    )}
      <div className={`md:hidden top-0 left-0 w-[50vw] py-10 px-8 fixed h-full bg-cyan-800 text-white z-10 ease-in-out duration-700 ${expanded ? "-translate-x-0" : "-translate-x-full"}`}>
        <div className="flex items-center justify-center pt-10">
            <SearchBar />
        </div>
      </div>
    </>
  );
};

export default MobileSidebar;
