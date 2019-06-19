import React from "react";
import css from "./Select.module.css";
import Toggable from "../../../util/Toggable";

const getLabel = (options, value) => options.find(opt => opt.value === value);
const Select = ({ value, name, onChange, options, style = {} }) => {
  const handleSelectItem = (value, toggle) => {
    const target = { name, value };
    onChange({ target });
    toggle();
  };

  return (
    <Toggable>
      {({ isToggle, toggle }) => {
        return (
          <div className={`${css.select} ${style.select}`}>
            <p onClick={toggle} className={`${css.value} ${style.value}`}>
              {getLabel(options, value).label}
            </p>
            {isToggle && (
              <div className={`${css.items} ${style.items}`}>
                {options.map(opt => {
                  return (
                    <p
                      key={opt.value}
                      className={css.option}
                      onClick={() => handleSelectItem(opt.value, toggle)}
                    >
                      {opt.label}
                    </p>
                  );
                })}
              </div>
            )}
          </div>
        );
      }}
    </Toggable>
  );
};

export default Select;
