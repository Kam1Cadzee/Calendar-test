import React from "react";
import css from "./RowOfMonth.module.css";
import DayOfMonth from "../DayOfMonth/DayOfMonth";

const RowOfMonth = ({ week }) => {
  return (
    <>
      {week.map((day, index) => (
        <DayOfMonth day={day} key={index} />
      ))}
    </>
  );
};
export default RowOfMonth;
