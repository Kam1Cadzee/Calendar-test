import { connect } from "react-redux";
import { changeEvent, deleteEvent } from "../../redux/Calendar/calendarActions";
import { getEventDate } from "../../redux/Calendar/calendarSelectors";
import Event from "../Calendar/Event/Event";

const mapStateToProps = state => ({
  eventDate: getEventDate(state)
});
const mapDispatchToProps = {
  deleteEvent,
  changeEvent
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Event);
