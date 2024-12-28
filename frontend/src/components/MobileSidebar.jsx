import { useState } from "react";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";

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
      <div className={`md:hidden top-0 left-0 w-[50vw] p-10 fixed h-full bg-cyan-600 text-white z-10 ease-in-out duration-700 ${expanded ? "-translate-x-0" : "-translate-x-full"}`}>
        <h2>MobileSidebar</h2>
      </div>
    </>
  );
};

export default MobileSidebar;
