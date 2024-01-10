import React from "react";
import InputField from "../Components/InputField";

const WorkExperience = ({ handleChange }) => {
  return (
    <div>
      <h4 className="text-lg font-medium mb-2">Work Experience</h4>

      <div>
        <label className="sidebar-label-container">
          <input
            type="radio"
            name="test3"
            id="test3"
            value=""
            onChange={handleChange}
          />
          <span className="checkmark"></span>Any experience
        </label>

        <InputField
          handleChange={handleChange}
          value="Internship"
          title="Internship"
          name="test3"
        />
        <InputField
          handleChange={handleChange}
          value="Work remotely"
          title="Work remotely"
          name="test3"
        />
      </div>
    </div>
  );
};

export default WorkExperience;
