import React from "react";
import css from "./DayOfMonth.module.css";

const DayOfMonth = ({ day, setCurrentDate }) => {
  return (
    <div className={css.day} onClick={() => setCurrentDate(day)}>
      {day}
    </div>
  );
};
export default DayOfMonth;
