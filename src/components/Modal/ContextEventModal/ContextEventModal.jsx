import React from "react";
import css from "./ContextEventModal.module.css";
import Colors from "../../Colors/Colors";
import { getColorEventById } from "../../../redux/Calendar/calendarSelectors";
import { connect } from "react-redux";

const ContextEventModal = ({
  deleteEvent,
  id,
  onClose,
  style,
  currentColor,
  changeEvent
}) => {
  let backElement = React.createRef();

  const handleClose = e => {
    e.stopPropagation();
    if (e.target === backElement) {
      onClose();
    }
  };
  const handleDeleteEvent = () => {
    deleteEvent(id);
    onClose();
  };

  const handleChangeColor = color => {
    changeEvent(id, { color });
  };
  return (
    <div
      ref={e => (backElement = e)}
      onClick={handleClose}
      className={css.modal}
    >
      <div className={css.content} style={style}>
        <button type="Button" onClick={handleDeleteEvent}>
          delete
        </button>
        <Colors currentColor={currentColor} changeColor={handleChangeColor} />
      </div>
    </div>
  );
};
const mapStateToProps = (state, props) => ({
  currentColor: getColorEventById(state, props.id)
});
export default connect(mapStateToProps)(ContextEventModal);
