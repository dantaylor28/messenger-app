import React from "react";
import { PersonStanding } from "lucide-react";

const GenderCheckbox = ({ onCheckboxChange, selectedGender }) => {
  return (
    <div className="mb-3">
      <label htmlFor="gender">
        <span className="text-xs font-medium">Gender</span>
      </label>
      <div className="relative flex items-center gap-6 border border-black/25 w-full rounded-[4px] h-10 pl-10">
        <div className="form-control peer">
          <label
            className={`flex gap-1.5 items-center justify-center ${
              selectedGender === "male" ? "selected" : ""
            }`}
          >
            <span className="text-sm">Male</span>
            <input
              id="gender"
              type="checkbox"
              checked={selectedGender === "male"}
              onChange={() => onCheckboxChange("male")}
              className="appearance-none h-3 w-3 border-2 border-white outline outline-gray-300 rounded-full bg-white checked:bg-cyan-600 hover:cursor-pointer"
            />
          </label>
        </div>
        <div className="form-control peer">
          <label
            className={`flex gap-1.5 items-center justify-center ${
              selectedGender === "female" ? "selected" : ""
            }`}
          >
            <span className="text-sm">Female</span>
            <input
              type="checkbox"
              checked={selectedGender === "female"}
              onChange={() => onCheckboxChange("female")}
              className="appearance-none h-3 w-3 border-2 border-white outline outline-gray-300 rounded-full bg-white checked:bg-cyan-600 hover:cursor-pointer"
            />
          </label>
        </div>
        <div className="form-control peer">
          <label
            className={`flex gap-1.5 items-center justify-center ${
              selectedGender === "prefer not to say" ? "selected" : ""
            }`}
          >
            <span className="text-sm">Prefer not to say</span>
            <input
              type="checkbox"
              checked={selectedGender === "prefer not to say"}
              onChange={() => onCheckboxChange("prefer not to say")}
              className="appearance-none h-3 w-3 border-2 border-white outline outline-gray-300 rounded-full bg-white checked:bg-cyan-600 hover:cursor-pointer"
            />
          </label>
        </div>
        <PersonStanding className="absolute pointer-events-none left-0 ml-2 size-5 text-black/45 peer-focus-within:text-black/70" />
      </div>
    </div>
  );
};

export default GenderCheckbox;
