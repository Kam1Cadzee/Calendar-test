import React from "react";
import css from "./Event.module.css";
import Modal from "../../Modal/Modal";
import ContextEventModal from "../../Modal/ContextEventModal/ContextEventModal";
import AddEventModal from "../../Modal/AddEventModal/AddEventModal";

class Event extends React.Component {
  state = {
    styleContextMenu: null,
    isContextMenu: false,
    isChangeMenu: false
  };

  toggleContextMenu = () => {
    this.setState(state => ({ isContextMenu: !state.isContextMenu }));
  };
  toggleChangeMenu = () => {
    this.setState(state => ({ isChangeMenu: !state.isChangeMenu }));
  };
  openContextModal = e => {
    const { setCurrentDate } = this.props;
    e.preventDefault();
    let { left, top, height } = e.target.getBoundingClientRect();
    const { innerWidth, innerHeight } = window;
    left = (left * 100) / innerWidth;
    top = ((top + height) * 100) / innerHeight;
    const position = {
      left: `${left}%`,
      top: `${top}%`
    };
    this.setState({ styleContextMenu: position });
    this.toggleContextMenu();
    setCurrentDate();
  };
  openChangeMenu = e => {
    const { setCurrentDate } = this.props;
    e.stopPropagation();
    this.toggleChangeMenu();
    setCurrentDate();
  };
  render() {
    const { event, deleteEvent, changeEvent, eventDate } = this.props;
    const { styleContextMenu, isContextMenu, isChangeMenu } = this.state;
    const style = { backgroundColor: event.get("color") };

    return (
      <>
        <div
          className={css.event}
          onContextMenu={this.openContextModal}
          onClick={this.openChangeMenu}
          style={style}
        >
          {event.get("name")}
        </div>
        {isContextMenu && (
          <Modal>
            <ContextEventModal
              deleteEvent={deleteEvent}
              id={event.get("id")}
              onClose={this.toggleContextMenu}
              style={styleContextMenu}
              changeEvent={changeEvent}
            />
          </Modal>
        )}
        {isChangeMenu && (
          <Modal>
            <AddEventModal
              event={event}
              eventDate={eventDate}
              onClose={this.toggleChangeMenu}
              changeEvent={changeEvent}
            />
          </Modal>
        )}
      </>
    );
  }
}

export default Event;
