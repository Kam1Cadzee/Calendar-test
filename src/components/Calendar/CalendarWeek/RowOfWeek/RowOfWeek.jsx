import React from "react";
import css from "./RowOfWeek.module.css";
import DayOfWeek from "../container/DayOfWeekContainer";

const RowOfWeek = ({ time, days }) => {
  return (
    <>
      <div className={css.time}>{time === "00:00" ? null : time}</div>
      {days.map(day => (
        <DayOfWeek date={day} startTime={time} key={time + day.date} />
      ))}
    </>
  );
};

export default RowOfWeek;
