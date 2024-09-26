import React from "react";

const GenderCheckbox = ({ onCheckboxChange, selectedGender }) => {
  return (
    <div className="flex gap-4 mt-3">
      <div className="form-control">
        <label
          className={`flex gap-1 ${
            selectedGender === "male" ? "selected" : ""
          }`}
        >
          <span>Male</span>
          <input
            type="checkbox"
            checked={selectedGender === "male"}
            onChange={() => onCheckboxChange("male")}
          />
        </label>
      </div>
      <div className="form-control">
        <label
          className={`flex gap-1 ${
            selectedGender === "female" ? "selected" : ""
          }`}
        >
          <span>Female</span>
          <input
            type="checkbox"
            checked={selectedGender === "female"}
            onChange={() => onCheckboxChange("female")}
          />
        </label>
      </div>
      <div className="form-control">
        <label
          className={`flex gap-1 ${
            selectedGender === "prefer not to say" ? "selected" : ""
          }`}
        >
          <span>Prefer not to say</span>
          <input
            type="checkbox"
            checked={selectedGender === "prefer not to say"}
            onChange={() => onCheckboxChange("prefer not to say")}
          />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckbox;
