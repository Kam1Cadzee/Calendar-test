import React from "react";
import css from "./ContentCalendarWeek.module.css";
import { getTimesOfDay } from "../../../../util/calendarUtil";
import RowOfWeek from "../RowOfWeek/RowOfWeek";

const times = getTimesOfDay();
const ContentCalendarWeek = ({ days }) => {
  return (
    <div className={css.content}>
      {times.map(time => (
        <RowOfWeek key={time.value} time={time.value} days={days} />
      ))}
    </div>
  );
};
export default ContentCalendarWeek;
