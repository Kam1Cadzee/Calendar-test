import React from "react";
import css from "./DayOfMonth.module.css";
import { getEventsOfDay } from "../../../../redux/Calendar/calendarSelectors";
import { connect } from "react-redux";
import Event from "../../../container/EventContainer";

const DayOfMonth = ({ date, setCurrentDate, eventDate, events = [] }) => {
  console.log(events);

  const handleClick = e => {
    setCurrentDate(date);
  };
  return (
    <div className={css.day} onClick={handleClick}>
      {date.date}
      {events.map(event => (
        <Event
          key={event.get("id")}
          event={event}
          setCurrentDate={handleClick}
          eventDate={eventDate}
        />
      ))}
    </div>
  );
};

const mapStateToProps = (state, props) => ({
  events: getEventsOfDay(state, props)
});
export default connect(mapStateToProps)(DayOfMonth);
