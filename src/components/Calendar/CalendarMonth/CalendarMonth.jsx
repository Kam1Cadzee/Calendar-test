import React from "react";
import RowOfMonth from "./RowOfMonth/RowOfMonth";

const CalendarMonth = ({ data }) => {
  return (
    <div>
      {data.map((week, index) => (
        <RowOfMonth week={week} key={index} />
      ))}
    </div>
  );
};

export default CalendarMonth;
