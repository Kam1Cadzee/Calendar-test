import React from "react";
import DayOfMonth from "../container/DayOfMonthContainer";

const RowOfMonth = ({ week }) => {
  return (
    <>
      {week.map((date, index) => (
        <DayOfMonth date={date} key={index} />
      ))}
    </>
  );
};
export default RowOfMonth;
