import React from "react";
import css from "./HeaderCalendar.module.css";
import HeaderItem from "./HeaderItem/HeaderItem";

const HeaderCalendarWeek = ({ days }) => {
  return (
    <div className={css.header}>
      <div />
      {days.map((day, index) => (
        <HeaderItem key={index} day={day} index={index} />
      ))}
    </div>
  );
};

export default HeaderCalendarWeek;
