import React from "react";
import css from "./RowOfMonth.module.css";
import DayOfMonth from "../DayOfMonth/DayOfMonth";

const RowOfMonth = ({ week, setCurrentDate, deleteEvent }) => {
  return (
    <>
      {week.map((date, index) => (
        <DayOfMonth
          date={date}
          key={index}
          setCurrentDate={setCurrentDate}
          deleteEvent={deleteEvent}
        />
      ))}
    </>
  );
};
export default RowOfMonth;
