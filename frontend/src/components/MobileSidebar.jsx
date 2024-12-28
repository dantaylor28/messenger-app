import React, { useState } from "react";

const MobileSidebar = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <>
    {expanded ? (
        <button className="md:hidden flex fixed top-6 left-10 z-20" onClick={() => setExpanded(!expanded)}>close</button>
    ) : (
        <button className="md:hidden flex fixed top-6 left-10 z-20" onClick={() => setExpanded(!expanded)}>open</button>
    )}
      <div className={`md:hidden top-0 left-0 w-[50vw] p-10 fixed h-full bg-cyan-600 text-white z-10 ${expanded ? "-translate-x-0" : "-translate-x-full"}`}>
        <h2>MobileSidebar</h2>
      </div>
    </>
  );
};

export default MobileSidebar;
