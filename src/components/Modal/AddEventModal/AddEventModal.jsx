import React from "react";
import css from "./AddEventModal.module.css";

class AddEventModal extends React.Component {
  backElement = React.createRef();

  state = {
    text: ""
  };
  handleChange = e => {
    this.setState({ text: e.target.value });
  };
  handleAddEvent = () => {
    const { addEvent, onClose } = this.props;
    addEvent(this.state);
    onClose();
  };
  closeModal = e => {
    const { onClose } = this.props;
    if (e.target === this.backElement.current) {
      onClose();
    }
  };
  render() {
    const { onClose } = this.props;
    const { text } = this.state;

    return (
      <div
        className={css.modal}
        onClick={this.closeModal}
        ref={this.backElement}
      >
        <div className={css.content}>
          <input type="text" value={text} onChange={this.handleChange} />
          <button onClick={this.handleAddEvent}>Save</button>
          <button onClick={onClose}>canvel</button>
        </div>
      </div>
    );
  }
}
export default AddEventModal;
