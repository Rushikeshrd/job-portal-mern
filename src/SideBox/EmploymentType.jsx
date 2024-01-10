import React from "react";
import InputField from "../Components/InputField";

const EmploymentType = ({ handleChange }) => {
  return (
    <div>
      <h4 className="text-lg font-medium mb-2">Type of Employment</h4>

      <div>
        <label className="sidebar-label-container">
          <input
            type="radio"
            name="test4"
            id="test4"
            value=""
            onChange={handleChange}
          />
          <span className="checkmark"></span>Any
        </label>

        <InputField
          handleChange={handleChange}
          value="full-time"
          title="Full-time"
          name="test4"
        />
        <InputField
          handleChange={handleChange}
          value="temporary"
          title="Temporary"
          name="test4"
        />
        <InputField
          handleChange={handleChange}
          value="part-time"
          title="Part-time"
          name="test4"
        />
      </div>
    </div>
  );
};

export default EmploymentType;
