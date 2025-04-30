import React from "react";
import { useLocation } from "react-router-dom";

const AuthImagePattern = ({ heading, text }) => {
  const location = useLocation();
  return (
    <div className={`hidden lg:flex items-center justify-center ${location.pathname === "/signup" ? "bg-gradient-to-r border-r" : "bg-gradient-to-l border-l"} from-amber-600/60 to-amber-300/50 border-amber-800/5 dark:from-zinc-900/80 dark:to-stone-800/80`}>
      <div className="max-w-md text-center">
        <div className="grid grid-cols-3 gap-3 mb-8 items-center">
          {[...Array(9)].map((_, i) => (
            <div
              key={i}
              className={`aspect-square ${
                i % 2 === 0
                  ? "h-32 w-32 scale-animation rounded-xl"
                  : "h-28 w-28 pulse-animation ml-2 rounded-md"
              } ${i % 2 === 0 ? "bg-amber-950/15 dark:bg-zinc-950/30 dark:border dark:border-white/10" : "bg-amber-600/40 dark:bg-white/15 dark:border dark:border-white/10"}`}
              style={{
                animationDelay: `${i * 0.3}s`,
              }}
            />
          ))}
        </div>
        <h2 className="font-semibold tracking-widest text-2xl text-black/65 dark:text-amber-500 mb-3">
          {heading}
        </h2>
        <p className="font-light text-black/70 dark:text-white/80">{text}</p>
      </div>
    </div>
  );
};

export default AuthImagePattern;
