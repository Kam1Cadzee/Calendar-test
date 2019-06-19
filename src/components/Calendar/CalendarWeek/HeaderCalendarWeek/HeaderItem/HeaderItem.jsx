import React from "react";
import css from "./HeaderItem.module.css";
import { equalDates, getNameDayOfWeek } from "../../../../../util/calendarUtil";
import classNames from "classnames/bind";
const cx = classNames.bind(css);

const HeaderItem = ({ date, index }) => {
  const dayClass = cx({
    day: true
  });
  const dateClass = cx({
    date: true,
    dateCurrent: equalDates(date)
  });
  return (
    <div className={css.item}>
      <p className={dayClass}>{getNameDayOfWeek(index).short}</p>
      <p className={dateClass}>{date.date}</p>
    </div>
  );
};
export default HeaderItem;
