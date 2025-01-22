import React from "react";

const AuthImagePattern = () => {
  return (
    <div className="hidden lg:flex items-center justify-center bg-gradient-to-r from-amber-500/60 to-yellow-400/60">
      <div className="max-w-md text-center">
        <div className="grid grid-cols-3 gap-3 mb-8 items-center">
          {[...Array(9)].map((_, i) => (
            <div
              key={i}
              className={`aspect-square bg-amber-700/50 ${
                i % 2 === 0
                  ? "h-32 w-32 scale-animation rounded-xl"
                  : "h-28 w-28 pulse-animation ml-2 rounded-md"
              } ${i % 2 === 0 ? "bg-yellow-600/50" : ""}`}
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
