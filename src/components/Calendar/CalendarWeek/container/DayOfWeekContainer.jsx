import { getEventDate } from "../../../../redux/Calendar/calendarSelectors";
import { setEventDate } from "../../../../redux/Calendar/calendarActions";
import { connect } from "react-redux";
import DayOfWeek from "../DayOfWeek/DayOfWeek";

const mapStateToProps = state => ({
  eventDate: getEventDate(state)
});

const mapDispatchToProps = {
  setEventDate
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DayOfWeek);
