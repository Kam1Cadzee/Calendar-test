import React from "react";
import css from "./ContextEventModal.module.css";
import Colors from "../../Colors/Colors";
import { getColorEventById } from "../../../redux/Calendar/calendarSelectors";
import { connect } from "react-redux";
import Button from "../../Shared/Button/Button";
import {
  changeEvent,
  deleteEvent
} from "../../../redux/Calendar/calendarActions";

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
        <Button type="Button" onClick={handleDeleteEvent}>
          Удалить
        </Button>
        <Colors currentColor={currentColor} changeColor={handleChangeColor} />
      </div>
    </div>
  );
};
const mapStateToProps = (state, props) => ({
  currentColor: getColorEventById(state, props.id)
});
const mapDispatchToProps = {
  deleteEvent,
  changeEvent
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContextEventModal);
