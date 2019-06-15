import React from "react";
import css from "./Button.module.css";

const Button = ({ type = "button", onClick = () => null, children }) => {
  return (
    <button type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
