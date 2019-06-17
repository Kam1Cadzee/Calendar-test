import React from "react";
import RowOfMonth from "./RowOfMonth/RowOfMonth";
import css from "./CalendarMonth.module.css";
import Toggable from "../../../util/Toggable";
import Modal from "../../Modal/Modal";
import AddEventModal from "../../Modal/AddEventModal/AddEventModal";

const CalendarMonth = ({
  data,
  setCurrentDate,
  addEvent,
  deleteEvent,
  eventDate,
  changeEvent
}) => {
  return (
    <Toggable>
      {({ isToggle, toggle }) => {
        return (
          <>
            <div className={css.calendar} onClick={toggle}>
              {data.map((week, index) => (
                <RowOfMonth
                  week={week}
                  key={index}
                  setCurrentDate={setCurrentDate}
                  deleteEvent={deleteEvent}
                  changeEvent={changeEvent}
                  eventDate={eventDate}
                />
              ))}
            </div>
            {isToggle && (
              <Modal>
                <AddEventModal
                  onClose={toggle}
                  addEvent={addEvent}
                  eventDate={eventDate}
                />
              </Modal>
            )}
          </>
        );
      }}
    </Toggable>
  );
};

export default CalendarMonth;
