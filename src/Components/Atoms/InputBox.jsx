import React from "react";
import "./InputBox.css";
export default function InputBox(props) {
  const { label, placeholder, name, handleChange, value } = props;
  const changeEvent = (e) => {
    handleChange(name, e.target.value);
  };
  return (
    <div className="inputs">
      <div className="label">{label}</div>
      <input
        className="inputBox"
        value={value}
        placeholder={placeholder}
        onChange={(e) => {
          changeEvent(e);
        }}
      />
    </div>
  );
}
