import React from "react";
import css from "./RowOfMonth.module.css";
import DayOfMonth from "../DayOfMonth/DayOfMonth";

const RowOfMonth = ({ week }) => {
  return (
    <div className={css.week}>
      {week.map((day, index) => (
        <DayOfMonth day={day} key={index} />
      ))}
    </div>
  );
};
export default RowOfMonth;
