import React from "react";
import css from "./DayOfWeek.module.css";
import Toggable from "../../../../util/Toggable";
import AddEventModal from "../../../Modal/AddEventModal/AddEventModal";
import Modal from "../../../Modal/Modal";
import Event from "../../../container/EventContainer";

const DayOfWeek = ({ startTime, date, setEventDate, addEvent, events }) => {
  const handleClick = openModal => {
    setEventDate(date);
    openModal && openModal();
  };
  return (
    <Toggable>
      {({ isToggle, toggle }) => {
        return (
          <>
            <div className={css.day} onClick={() => handleClick(toggle)}>
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

export default DayOfWeek;
