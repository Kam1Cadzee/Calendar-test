import React from "react";
import { Route } from "react-router-dom";
import CalendarMonth from "./CalendarMonth/CalendarMonth";

const Calendar = props => {
  return (
    <>
      <Route path="/month" render={() => <CalendarMonth {...props} />} />
      <Route path="/week" render={() => <h1>week</h1>} />
      <Route path="/day" render={() => <h1>day</h1>} />
    </>
  );
};

export default Calendar;
