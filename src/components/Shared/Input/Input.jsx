import React from "react";
import css from "./Input.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(css);

const Input = ({ type = "text", name, value, onChange }) => {
  const inputClass = cx({
    input: true,
    inputEmpty: value === ""
  });
  return (
    <input
      className={inputClass}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder="Enter name event..."
    />
  );
};

export default Input;
