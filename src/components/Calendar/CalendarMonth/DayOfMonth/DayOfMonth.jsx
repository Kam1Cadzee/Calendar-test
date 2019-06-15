import React from "react";
import css from "./DayOfMonth.module.css";

const DayOfMonth = ({ day }) => {
  return <div className={css.day}>{day}</div>;
};
export default DayOfMonth;
