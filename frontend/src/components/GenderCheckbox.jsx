import React from "react";
import { PersonStanding } from "lucide-react";

const GenderCheckbox = ({
  onCheckboxChange,
  selectedGender,
  variant = "signup",
  disabled = false,
}) => {
  return (
    <div className={variant === "signup" ? "mb-3" : ""}>
      {variant === "signup" && (
        <label htmlFor="gender">
          <span className="text-xs font-medium dark:text-white">Gender</span>
        </label>
      )}
      <div
        className={`relative flex items-center gap-6 dark:text-white border w-full rounded-[4px] h-10 ${
          variant === "signup"
            ? "pl-10 dark:bg-white/10 dark:border-white/20 border-black/25"
            : "pl-3 dark:border-white/10 border-black/40"
        } ${
          disabled
            ? "bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-white/40 cursor-not-allowed"
            : "text-black dark:text-white/80"
        }`}
      >
        <div className="form-control peer">
          <label
            className={`flex gap-1.5 items-center justify-center ${
              selectedGender === "male" ? "selected" : ""
            }`}
          >
            <span className={`text-sm ${disabled ? "cursor-not-allowed" : ""}`}>Male</span>
            <input
              id="gender"
              type="checkbox"
              disabled={disabled}
              checked={selectedGender === "male"}
              onChange={() => !disabled && onCheckboxChange("male")}
              className="appearance-none h-3 w-3 border-2 border-white dark:border-zinc-900 outline outline-gray-300 dark:outline-gray-500 rounded-full bg-white dark:bg-zinc-900 checked:bg-amber-500 dark:checked:bg-amber-600 hover:cursor-pointer disabled:cursor-not-allowed disabled:opacity-50"
            />
          </label>
        </div>
        <div className="form-control peer">
          <label
            className={`flex gap-1.5 items-center justify-center ${
              selectedGender === "female" ? "selected" : ""
            }`}
          >
            <span className={`text-sm ${disabled ? "cursor-not-allowed" : ""}`}>Female</span>
            <input
              type="checkbox"
              disabled={disabled}
              checked={selectedGender === "female"}
              onChange={() => !disabled && onCheckboxChange("female")}
              className="appearance-none h-3 w-3 border-2 border-white dark:border-zinc-900 outline outline-gray-300 dark:outline-gray-500 rounded-full bg-white dark:bg-zinc-900 checked:bg-amber-500 dark:checked:bg-amber-600 hover:cursor-pointer disabled:cursor-not-allowed disabled:opacity-50"
            />
          </label>
        </div>
        <div className="form-control peer">
          <label
            className={`flex gap-1.5 items-center justify-center ${
              selectedGender === "prefer not to say" ? "selected" : ""
            }`}
          >
            <span className={`text-sm ${disabled ? "cursor-not-allowed" : ""}`}>Prefer not to say</span>
            <input
              type="checkbox"
              disabled={disabled}
              checked={selectedGender === "prefer not to say"}
              onChange={() =>
                !disabled && onCheckboxChange("prefer not to say")
              }
              className="appearance-none h-3 w-3 border-2 border-white dark:border-zinc-900 outline outline-gray-300 dark:outline-gray-500 rounded-full bg-white dark:bg-zinc-900 checked:bg-amber-500 dark:checked:bg-amber-600 hover:cursor-pointer disabled:cursor-not-allowed disabled:opacity-50"
            />
          </label>
        </div>
        {variant === "signup" && (
          <PersonStanding className="absolute pointer-events-none left-0 ml-2 size-5 text-black/45 dark:text-white/50 peer-focus-within:text-black/70 dark:peer-focus-within:text-white/70" />
        )}
      </div>
    </div>
  );
};

export default GenderCheckbox;
