import React from "react";
import css from "./ContextEventModal.module.css";

const ContextEventModal = ({
  deleteEvent,
  changeColor,
  colors,
  id,
  onClose,
  currentColor,
  style
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

  console.log(style);
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
        <div className={css.colors}>
          {colors.map(color => {
            return (
              <span
                className={color === currentColor ? css.activeColor : css.color}
                key={color.name}
                style={{ backgroundColor: color.color }}
                onClick={() => changeColor(color)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default ContextEventModal;
