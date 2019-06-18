import React from "react";
import RowOfMonth from "./RowOfMonth/RowOfMonth";
import css from "./CalendarMonth.module.css";

const CalendarMonth = ({
  data,
  setCurrentDate,
  addEvent,
  deleteEvent,
  eventDate,
  changeEvent
}) => {
  return (
    <div className={css.calendar}>
      {data.map((week, index) => (
        <RowOfMonth
          week={week}
          key={index}
          setCurrentDate={setCurrentDate}
          deleteEvent={deleteEvent}
          changeEvent={changeEvent}
          eventDate={eventDate}
        />
      ))}
    </div>
  );
};

export default CalendarMonth;
