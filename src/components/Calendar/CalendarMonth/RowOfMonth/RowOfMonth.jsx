import React from "react";
import css from "./RowOfMonth.module.css";
import DayOfMonth from "../container/DayOfMonthContainer";

const RowOfMonth = ({
  week,
  setCurrentDate,
  deleteEvent,
  changeEvent,
  eventDate
}) => {
  return (
    <>
      {week.map((date, index) => (
        <DayOfMonth date={date} key={index} />
      ))}
    </>
  );
};
export default RowOfMonth;
