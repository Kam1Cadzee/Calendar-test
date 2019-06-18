import React from "react";
import css from "./AddEventModal.module.css";
import { getNameMonth } from "../../../util/calendarUtil";
import SelectTimes from "../../Shared/SelectTimes/SelectTimes";
import Colors from "../../Colors/Colors";
import { Map } from "immutable";

class AddEventModal extends React.Component {
  constructor(props) {
    super(props);
    let event = this.props.event || new Map();
    const { startTime } = this.props;
    this.state = {
      id: event.get("id") || null,
      name: event.get("name") || "",
      startTime: event.get("startTime") || startTime || "00:00",
      endTime: event.get("endTime") || "00:00",
      description: event.get("description") || "",
      color: event.get("color") || "blue"
    };
  }

  backElement = React.createRef();

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  handleChangeColor = color => this.setState({ color });
  handleAddEvent = () => {
    const { addEvent, onClose, event, changeEvent } = this.props;
    if (event) changeEvent(event.get("id"), this.state);
    else addEvent(this.state);
    onClose();
  };
  closeModal = e => {
    e.stopPropagation();
    const { onClose } = this.props;
    if (e.target === this.backElement.current) {
      onClose();
    }
  };

  render() {
    const { onClose, eventDate, event } = this.props;
    const { name, startTime, endTime, description, color } = this.state;
    return (
      <div
        className={css.modal}
        onClick={this.closeModal}
        ref={this.backElement}
      >
        <div className={css.content}>
          <input
            name="name"
            type="text"
            value={name}
            onChange={this.handleChange}
          />
          <p>{`${eventDate.date} ${getNameMonth(eventDate.month)} ${
            eventDate.year
          }`}</p>
          <SelectTimes
            name="startTime"
            value={startTime}
            onChange={this.handleChange}
          />
          <SelectTimes
            name="endTime"
            value={endTime}
            onChange={this.handleChange}
            startTime={startTime}
          />
          <textarea
            name="description"
            value={description}
            onChange={this.handleChange}
          />
          <Colors currentColor={color} changeColor={this.handleChangeColor} />
          <button onClick={this.handleAddEvent}>
            {event ? "Save" : "Add"}
          </button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    );
  }
}
export default AddEventModal;
