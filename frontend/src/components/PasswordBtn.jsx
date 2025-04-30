import React from "react";
import { EyeOff, Eye } from "lucide-react";

export const DisplayPasswordBtn = ({ displayPassword, setDisplayPassword }) => {
  return (
    <button
      type="button"
      className="absolute right-0 mr-2 flex items-center justify-center"
      onClick={() => setDisplayPassword(!displayPassword)}
    >
      {displayPassword ? (
        <EyeOff className="size-5 text-black/45 dark:text-white/50 hover:text-black/70 dark:hover:text-white/70 transition" />
      ) : (
        <Eye className="size-5 text-black/45 dark:text-white/50 hover:text-black/70 dark:hover:text-white/70 transition" />
      )}
    </button>
  );
};

export const DisplayConfirmPasswordBtn = ({
  displayConfirmPassword,
  setDisplayConfirmPassword,
}) => {
  return (
    <button
      type="button"
      className="absolute right-0 mr-2 flex items-center justify-center"
      onClick={() => setDisplayConfirmPassword(!displayConfirmPassword)}
    >
      {displayConfirmPassword ? (
        <EyeOff className="size-5 text-black/45 hover:text-black/70 transition" />
      ) : (
        <Eye className="size-5 text-black/45 hover:text-black/70 transition" />
      )}
    </button>
  );
};
