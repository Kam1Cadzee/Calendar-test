import React from "react";
import css from "./Event.module.css";
import Modal from "../../Modal/Modal";
import ContextEventModal from "../../Modal/ContextEventModal/ContextEventModal";
import anim from "../../../animation/AnimOpacity.module.css";
import { CSSTransition } from "react-transition-group";

const getPositionModal = target => {
  let { left, top, height } = target.getBoundingClientRect();
  let nameY = "top";
  const { innerWidth, innerHeight } = window;
  if (innerWidth - left < 230) left = innerWidth - 240;
  if (innerHeight - top < 180) {
    nameY = "bottom";
    top = innerHeight - top;
  }

  top = ((top + height + 10) * 100) / innerHeight;
  left = (left * 100) / innerWidth;
  const position = {
    left: `${left}%`,
    [nameY]: `${top}%`
  };
  return position;
};
class Event extends React.Component {
  state = {
    styleContextMenu: null,
    isContextMenu: false
  };

  toggleContextMenu = () => {
    this.setState(state => ({ isContextMenu: !state.isContextMenu }));
  };
  openContextModal = e => {
    const { setEventDate, date } = this.props;
    e.preventDefault();

    this.setState({ styleContextMenu: getPositionModal(e.target) });
    this.toggleContextMenu();
    console.log();
    setEventDate(date);
  };
  openChangeMenu = e => {
    const { openModal } = this.props;
    e.stopPropagation();
    const { event } = this.props;
    openModal(event);
  };
  render() {
    const { event } = this.props;
    const { styleContextMenu, isContextMenu } = this.state;
    const style = { backgroundColor: event.get("color") };

    return (
      <>
        <p
          className={css.event}
          onContextMenu={this.openContextModal}
          onClick={this.openChangeMenu}
          style={style}
        >
          {event.get("name")}
        </p>
        <CSSTransition
          in={isContextMenu}
          timeout={300}
          classNames={anim}
          unmountOnExit
        >
          <Modal>
            <ContextEventModal
              id={event.get("id")}
              onClose={this.toggleContextMenu}
              style={styleContextMenu}
            />
          </Modal>
        </CSSTransition>
      </>
    );
  }
}

export default Event;
