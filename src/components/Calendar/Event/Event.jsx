import React from "react";
import css from "./Event.module.css";
import Toggable from "../../../util/Toggable";
import Modal from "../../Modal/Modal";
import ContextEventModal from "../../Modal/ContextEventModal/ContextEventModal";

const colors = [
  { name: "blue", color: "blue" },
  { name: "aqua", color: "aqua" },
  { name: "darkviolet", color: "darkviolet" },
  { name: "darkgreen", color: "darkgreen" }
];
class Event extends React.Component {
  state = {
    colorEvent: colors[0],
    styleContextMenu: null
  };
  handleChangeColor = color => {
    this.setState({ colorEvent: color });
  };

  render() {
    const { event, deleteEvent, setCurrentDate } = this.props;
    const { colorEvent, styleContextMenu } = this.state;
    const style = { backgroundColor: colorEvent.color };
    return (
      <Toggable>
        {({ isToggle, toggle }) => {
          const openContextModal = e => {
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
            toggle();
            setCurrentDate();
          };
          return (
            <>
              <div
                className={css.event}
                onContextMenu={openContextModal}
                style={style}
              >
                {event.get("text")}
              </div>
              {isToggle && (
                <Modal>
                  <ContextEventModal
                    colors={colors}
                    deleteEvent={deleteEvent}
                    id={event.get("id")}
                    onClose={toggle}
                    changeColor={this.handleChangeColor}
                    currentColor={colorEvent}
                    style={styleContextMenu}
                  />
                </Modal>
              )}
            </>
          );
        }}
      </Toggable>
    );
  }
}

export default Event;
