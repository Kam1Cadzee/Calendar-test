import {
  getCurrentDate,
  getEventsOfDay
} from "../../../../redux/Calendar/calendarSelectors";
import {
  addEvent,
  setEventDate
} from "../../../../redux/Calendar/calendarActions";
import { connect } from "react-redux";
import Day from "../../Day/Day";
import React from "react";

class DayOfWeekContainer extends React.Component {
  componentDidUpdate(prevProps, prevState, snapshot) {
    //console.log(prevProps.events === this.props.events);
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return nextProps.events.length !== 0;
  }

  render() {
    return <Day {...this.props} isShow />;
  }
}
const mapStateToProps = (state, props) => ({
  events: getEventsOfDay(state, props),
  currentDate: getCurrentDate(state)
});

const mapDispatchToProps = {
  setEventDate,
  addEvent
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DayOfWeekContainer);
