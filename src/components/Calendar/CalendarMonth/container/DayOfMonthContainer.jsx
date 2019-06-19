import {
  getCurrentDate,
  getEventsOfDay
} from "../../../../redux/Calendar/calendarSelectors";
import { setEventDate } from "../../../../redux/Calendar/calendarActions";
import { connect } from "react-redux";
import Day from "../../Day/Day";
import React from "react";

class DayOfWeekContainer extends React.Component {
  render() {
    return <Day {...this.props} isShow />;
  }
}
const mapStateToProps = (state, props) => ({
  events: getEventsOfDay(state, props),
  currentDate: getCurrentDate(state)
});

const mapDispatchToProps = {
  setEventDate
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DayOfWeekContainer);
