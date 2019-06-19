import React from "react";
import css from "./ColorItem.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(css);

const ColorItem = ({ isActiveColor, color, changeColor }) => {
  const colorClass = cx({
    color: true,
    activeColor: isActiveColor
  });
  return (
    <span
      className={colorClass}
      key={color}
      style={{ backgroundColor: color }}
      onClick={() => changeColor(color)}
    />
  );
};

export default ColorItem;
