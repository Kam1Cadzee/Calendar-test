import React from "react";
import css from "./AddEventModal.module.css";
import {
  getDefaultColor,
  getNameMonth,
  getTimesOfDay
} from "../../../util/calendarUtil";
import Colors from "../../Colors/Colors";
import { Map } from "immutable";
import Input from "../../Shared/Input/Input";
import Select from "../../Shared/Select/Select";
import Button from "../../Shared/Button/Button";
import { addEvent, changeEvent } from "../../../redux/Calendar/calendarActions";
import { connect } from "react-redux";

class AddEventModal extends React.Component {
  constructor(props) {
    super(props);
    let event = this.props.event || new Map();
    const { startTime } = this.props;
    this.state = {
      id: event.get("id") || null,
      name: event.get("name") || "",
      startTime: event.get("startTime") || startTime || "00:00",
      endTime: event.get("endTime") || startTime || "00:00",
      description: event.get("description") || "",
      color: event.get("color") || getDefaultColor
    };
  }

  backElement = React.createRef();

  handleChange = e => {
    const { name, value } = e.target;
    if (name === "startTime") {
      this.setState(state => {
        const { endTime } = state;
        if (parseFloat(endTime) < parseFloat(value)) {
          return {
            startTime: value,
            endTime: value
          };
        }
      });
    }
    this.setState({ [name]: value });
  };
  handleChangeColor = color => this.setState({ color });

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.name === "") {
      return;
    }
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
        <form onSubmit={this.handleSubmit} className={css.content}>
          <Input
            name="name"
            type="text"
            value={name}
            onChange={this.handleChange}
          />

          <p className={css.date}>
            <i className="material-icons">calendar_today</i>
            {`${eventDate.date} ${getNameMonth(eventDate.month)} ${
              eventDate.year
            }`}
          </p>
          <div className={css.times}>
            <i className="material-icons">timeline</i>
            <Select
              name="startTime"
              value={startTime}
              onChange={this.handleChange}
              options={getTimesOfDay()}
            />
            <Select
              name="endTime"
              value={endTime}
              onChange={this.handleChange}
              options={getTimesOfDay(startTime)}
            />
          </div>

          <textarea
            name="description"
            value={description}
            onChange={this.handleChange}
            className={css.desc}
          />
          <Colors currentColor={color} changeColor={this.handleChangeColor} />
          <div className={css.controls}>
            <Button type="submit">{event ? "Сохранить" : "Добавить"}</Button>
            <Button onClick={onClose}>Назад</Button>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  addEvent,
  changeEvent
};
export default connect(
  null,
  mapDispatchToProps
)(AddEventModal);
