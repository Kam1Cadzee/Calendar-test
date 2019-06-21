import { connect } from "react-redux";
import { setEventDate } from "../../redux/Calendar/calendarActions";
import { getEventDate } from "../../redux/Calendar/calendarSelectors";
import Event from "../Calendar/Event/Event";

const mapStateToProps = state => ({
  eventDate: getEventDate(state)
});
const mapDispatchToProps = {
  setEventDate
};

export default connect(
  null,
  mapDispatchToProps
)(Event);
