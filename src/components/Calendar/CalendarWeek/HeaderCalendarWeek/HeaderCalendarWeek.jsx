import React from "react";
import css from "./HeaderCalendar.module.css";
import HeaderItem from "./HeaderItem/HeaderItem";

const HeaderCalendarWeek = ({ days }) => {
  return (
    <div className={css.header}>
      <div />
      {days.map((date, index) => (
        <HeaderItem key={index} date={date} index={index} />
      ))}
    </div>
  );
};

export default HeaderCalendarWeek;
