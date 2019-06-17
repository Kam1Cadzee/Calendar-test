import React from "react";
import { getTimesOfDay } from "../../../util/calendarUtil";

const SelectTimes = ({ value, name, onChange, startTime = "00:00" }) => {
  return (
    <select name={name} value={value} onChange={onChange}>
      {getTimesOfDay(startTime).map(time => {
        return (
          <option key={time} value={time}>
            {time}
          </option>
        );
      })}
    </select>
  );
};

export default SelectTimes;
