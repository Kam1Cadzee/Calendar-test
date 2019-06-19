import {
  getCurrentDate,
  getEventsByTime
} from "../../../../redux/Calendar/calendarSelectors";
import { setEventDate } from "../../../../redux/Calendar/calendarActions";
import { connect } from "react-redux";
import Day from "../../Day/Day";
import React from "react";

class DayOfWeekContainer extends React.Component {
  componentDidUpdate(prevProps, prevState, snapshot) {
    //console.log(prevProps.events === this.props.events);
  }

  /* shouldComponentUpdate(nextProps, nextState, nextContext) {
    if (nextProps.currentDate !== this.props.currentDate) return true;
    return nextProps.events.length !== 0;
  }*/

  render() {
    return <Day {...this.props} />;
  }
}
const mapStateToProps = (state, props) => ({
  events: getEventsByTime(state, props),
  currentDate: getCurrentDate(state)
});

const mapDispatchToProps = {
  setEventDate
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DayOfWeekContainer);
