import React from "react";
import { Route } from "react-router-dom";
import CalendarMonth from "./CalendarMonth/CalendarMonth";
import CalendarWeek from "./CalendarWeek/CalendarWeek";

const Calendar = props => {
  return (
    <>
      <Route path="/month" render={() => <CalendarMonth {...props} />} />
      <Route path="/week" render={() => <CalendarWeek {...props} />} />
      <Route path="/day" render={() => <h1>day</h1>} />
    </>
  );
};

export default Calendar;
