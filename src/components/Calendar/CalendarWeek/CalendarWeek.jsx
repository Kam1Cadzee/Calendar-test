import React from "react";
import css from "./CalendarWeek.module.css";
import HeaderCalendarWeek from "./HeaderCalendarWeek/HeaderCalendarWeek";
import ContentCalendarWeek from "./ContentCalendarWeek/ContentCalendarWeek";

const CalendarWeek = ({
  data, // числа нидели
  setCurrentDate: setEventDate, // установить дату события
  addEvent,
  deleteEvent,
  eventDate, //
  changeEvent
}) => {
  return (
    <div className={css.container}>
      <HeaderCalendarWeek days={data} />
      <ContentCalendarWeek days={data} />
    </div>
  );
};

export default CalendarWeek;
