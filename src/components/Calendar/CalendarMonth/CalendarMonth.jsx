import React from "react";
import RowOfMonth from "./RowOfMonth/RowOfMonth";
import css from "./CalendarMonth.module.css";

const CalendarMonth = ({ data }) => {
  return (
    <div className={css.calendar}>
      {data.map((week, index) => (
        <RowOfMonth week={week} key={index} />
      ))}
    </div>
  );
};

export default CalendarMonth;
