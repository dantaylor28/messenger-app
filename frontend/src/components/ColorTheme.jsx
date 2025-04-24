import { Moon, Sun } from "lucide-react";
import React, { useEffect, useState } from "react";

export const ColorTheme = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);
  return (
    <div>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="flex items-center mr-4 cursor-pointer py-2 text-white bg-amber-600/40 p-2 rounded-full hover:bg-amber-600/55 transition"
      >
        {darkMode ? <Sun /> : <Moon />}
      </button>
    </div>
  );
};

export default ColorTheme;