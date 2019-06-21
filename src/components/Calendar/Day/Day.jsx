import React from "react";
import css from "./Day.module.css";
import AddEventModal from "../../Modal/AddEventModal/AddEventModal";
import Modal from "../../Modal/Modal";
import Event from "../../container/EventContainer";
import classNames from "classnames/bind";
import { equalDates, equalMonth } from "../../../util/calendarUtil";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import anim from "../../../animation/AnimModal.module.css";
import animOpacity from "../../../animation/AnimOpacity.module.css";

const cx = classNames.bind(css);

class Day extends React.Component {
  state = {
    currentEvent: null,
    isShowModal: false
  };
  toggleModal = () =>
    this.setState(state => ({ isShowModal: !state.isShowModal }));

  handleOpenModal = event => {
    const { setEventDate, date } = this.props;
    setEventDate(date);
    this.toggleModal();
    this.setState({ currentEvent: event });
  };

  render() {
    const { startTime, date, events = [], isShow, currentDate } = this.props;
    const { currentEvent, isShowModal } = this.state;
    const dayClass = cx({
      day: true,
      dayOfWeek: !isShow
    });
    const dateClass = cx({
      dayInField: true,
      dayInFieldActive: equalDates(date),
      dayInFieldCurrentMonth: equalMonth(date, currentDate)
    });
    return (
      <>
        <div className={dayClass} onClick={() => this.handleOpenModal()}>
          {isShow && <p className={dateClass}>{date.date}</p>}

          <TransitionGroup component={null}>
            {events.map(event => (
              <CSSTransition
                key={event.get("id")}
                timeout={300}
                classNames={animOpacity}
              >
                <Event
                  event={event}
                  openModal={this.handleOpenModal}
                  date={date}
                />
              </CSSTransition>
            ))}
          </TransitionGroup>
        </div>
        <CSSTransition
          in={isShowModal}
          timeout={300}
          classNames={anim}
          unmountOnExit
        >
          <Modal>
            <AddEventModal
              onClose={this.toggleModal}
              eventDate={date}
              startTime={startTime}
              event={currentEvent}
            />
          </Modal>
        </CSSTransition>
      </>
    );
  }
}

export default Day;
