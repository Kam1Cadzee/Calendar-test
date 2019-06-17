import React from "react";
import css from "./HeaderItem.module.css";
import { getNameDayOfWeek } from "../../../../../util/calendarUtil";

const HeaderItem = ({ day, index }) => {
  return (
    <div className={css.item}>
      <p>{getNameDayOfWeek(index).short}</p>
      <p>{day}</p>
    </div>
  );
};
export default HeaderItem;
