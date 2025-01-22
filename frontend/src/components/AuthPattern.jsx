import React from "react";

const AuthImagePattern = () => {
  return (
    <div className="hidden lg:flex items-center justify-center bg-gradient-to-r from-amber-600/60 to-amber-300/50 border-r border-amber-800/5">
      <div className="max-w-md text-center">
        <div className="grid grid-cols-3 gap-3 mb-8 items-center">
          {[...Array(9)].map((_, i) => (
            <div
              key={i}
              className={`aspect-square bg-amber-600/30 ${
                i % 2 === 0
                  ? "h-32 w-32 scale-animation rounded-xl"
                  : "h-28 w-28 pulse-animation ml-2 rounded-md"
              } ${i % 2 === 0 ? "bg-amber-950/15" : ""}`}
              style={{
                animationDelay: `${i * 0.3}s`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AuthImagePattern;
