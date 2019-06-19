import React from "react";
import css from "./Colors.module.css";
import colors from "../../colors";
import ColorItem from "./ColorItem/ColorItem";

const Colors = ({ currentColor, changeColor }) => {
  return (
    <div className={css.colors}>
      {colors.map(color => (
        <ColorItem
          key={color}
          color={color}
          changeColor={changeColor}
          isActiveColor={color === currentColor}
        />
      ))}
    </div>
  );
};

export default Colors;
