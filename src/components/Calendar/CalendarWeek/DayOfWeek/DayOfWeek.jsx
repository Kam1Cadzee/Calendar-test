import React from "react";
import css from "./DayOfWeek.module.css";

const DayOfWeek = ({ startTime, day, eventDate, setEventDate }) => {
  return (
    <div className={css.day} onClick={() => setEventDate({ date: day })}></div>
  );
};

export default DayOfWeek;
