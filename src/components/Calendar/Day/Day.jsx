import React from "react";
import css from "./Day.module.css";
import Toggable from "../../../util/Toggable";
import AddEventModal from "../../Modal/AddEventModal/AddEventModal";
import Modal from "../../Modal/Modal";
import Event from "../../container/EventContainer";
import classNames from "classnames/bind";

const cx = classNames.bind(css);
const equalDates = (date, currentDate) => {
  return (
    date.year === currentDate.getFullYear() &&
    date.month === currentDate.getMonth() &&
    date.date === currentDate.getDate()
  );
};
const equalMonth = (data, currentDate) => data.month === currentDate.getMonth();

const Day = ({
  startTime,
  date,
  setEventDate,
  addEvent,
  events,
  isShow,
  currentDate
}) => {
  const handleClick = openModal => {
    setEventDate(date);
    openModal && openModal();
  };

  const dayClass = cx({
    day: true,
    dayOfWeek: !isShow
  });
  const dateClass = cx({
    dayInField: true,
    dayInFieldActive: equalDates(date, currentDate),
    dayInFieldCurrentMonth: equalMonth(date, currentDate)
  });
  return (
    <Toggable>
      {({ isToggle, toggle }) => {
        return (
          <>
            <div className={dayClass} onClick={() => handleClick(toggle)}>
              {isShow && <p className={dateClass}>{date.date}</p>}
              {events.map(event => (
                <Event
                  key={event.get("id")}
                  event={event}
                  setCurrentDate={handleClick}
                />
              ))}
            </div>
            {isToggle && (
              <Modal>
                <AddEventModal
                  onClose={toggle}
                  eventDate={date}
                  startTime={startTime}
                  addEvent={addEvent}
                />
              </Modal>
            )}
          </>
        );
      }}
    </Toggable>
  );
};

export default Day;
