import React from "react";
import css from "./ButtonIcon.module.css";

const ButtonIcon = ({ type = "button", onClick = () => null, children }) => {
  return (
    <button className={css.buttonIcon} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default ButtonIcon;
