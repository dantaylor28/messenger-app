import React from "react";

const AuthImagePattern = () => {
  return (
    <div className="hidden lg:flex items-center justify-center bg-red-200">
      <div className="max-w-md text-center">
        <div className="grid grid-cols-3 gap-10 mb-8">
          {[...Array(9)].map((_, i) => (
            <div
              key={i}
              className={`aspect-square rounded-3xl bg-red-500 h-32 w-32 ${
                i % 2 === 0 ? "animate-pulse" : ""
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AuthImagePattern;
