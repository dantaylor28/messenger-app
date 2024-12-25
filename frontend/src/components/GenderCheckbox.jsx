import React from "react";

const GenderCheckbox = ({ onCheckboxChange, selectedGender }) => {
  return (
    <div className="flex gap-4 mt-3">
      <div className="form-control">
        <label
          className={`flex gap-1.5 items-center justify-center ${
            selectedGender === "male" ? "selected" : ""
          }`}
        >
          <span className="text-sm">Male</span>
          <input
            type="checkbox"
            checked={selectedGender === "male"}
            onChange={() => onCheckboxChange("male")}
            className="appearance-none h-4 w-4 border-2 border-white outline outline-gray-300 rounded bg-white checked:bg-cyan-600 hover:cursor-pointer"
          />
        </label>
      </div>
      <div className="form-control">
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
            className="appearance-none h-4 w-4 border-2 border-white outline outline-gray-300 rounded bg-white checked:bg-cyan-600 hover:cursor-pointer"
          />
        </label>
      </div>
      <div className="form-control">
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
            className="appearance-none h-4 w-4 border-2 border-white outline outline-gray-300 rounded bg-white checked:bg-cyan-600 hover:cursor-pointer"
          />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckbox;
