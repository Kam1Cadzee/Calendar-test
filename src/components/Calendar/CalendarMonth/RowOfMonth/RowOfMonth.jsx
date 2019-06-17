import React from "react";
import css from "./RowOfMonth.module.css";
import DayOfMonth from "../DayOfMonth/DayOfMonth";

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
        <DayOfMonth
          date={date}
          key={index}
          setCurrentDate={setCurrentDate}
          deleteEvent={deleteEvent}
          changeEvent={changeEvent}
          eventDate={eventDate}
        />
      ))}
    </>
  );
};
export default RowOfMonth;
