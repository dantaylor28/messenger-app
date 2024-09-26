import React from "react";

const GenderCheckbox = () => {
  return (
    <div className="flex gap-4 mt-3">
      <div className="form-control">
        <label className="flex gap-1">
          <span>Male</span>
          <input type="checkbox" />
        </label>
      </div>
      <div className="form-control">
        <label className=" flex gap-1">
          <span>Female</span>
          <input type="checkbox" />
        </label>
      </div>
      <div className="form-control">
        <label className="flex gap-1">
          <span>Prefer not to say</span>
          <input type="checkbox" />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckbox;
