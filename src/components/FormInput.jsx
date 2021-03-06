import React, { useState } from "react";
import "./forminput.css";

const FormInput = (props) => {
  const { label, onChange, errorMessage, id, ...inputProps } = props;

  const [focused, setFocused] = useState(false);

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div className="formInput">
      <label htmlFor="">{label}</label>
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        focused={focused.toString()}
        onFocus={() =>
          inputProps.name === "confirmPassword" && setFocused(true)
        }
        required
      />
      <span>{errorMessage}</span>
    </div>
  );
};

export default FormInput;
