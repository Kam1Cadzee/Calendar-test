import React from "react";
import css from "./Colors.module.css";
import colors from "../../colors";

const Colors = ({ currentColor, changeColor }) => {
  return (
    <div className={css.colors}>
      {colors.map(color => {
        return (
          <span
            className={color === currentColor ? css.activeColor : css.color}
            key={color}
            style={{ backgroundColor: color }}
            onClick={() => changeColor(color)}
          />
        );
      })}
    </div>
  );
};

export default Colors;
