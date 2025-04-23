import React, { useEffect, useState } from "react";

export const ColorTheme = () => {
  const [darkMode, setDarkMode] = useState(() => {
    localStorage.getItem("theme") === "dark";
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
      <button onClick={() => setDarkMode(!darkMode)} className="absolute bottom-5 right-5 h-16 w-16 p-3 bg-red-500">{darkMode ? "Dark" : "Light"}</button>
    </div>
  );
};
