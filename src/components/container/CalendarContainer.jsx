import React from "react";
import {
  setTypeDisplay,
  addEvent,
  deleteEvent,
  changeEvent,
  setCurrentDate
} from "../../redux/Calendar/calendarActions";
import { connect } from "react-redux";
import { TYPE_DISPLAY } from "../../util/calendarUtil";
import Calendar from "../Calendar/Calendar";
import {
  getData,
  getTypeDisplay
} from "../../redux/Calendar/calendarSelectors";

const isValideForamt = format => {
  return Object.values(TYPE_DISPLAY).some(type => type === format);
};
class CalendarContainer extends React.Component {
  componentDidMount() {
    const { format } = this.props.match.params;
    const { setTypeDisplay } = this.props;
    if (isValideForamt(format)) setTypeDisplay(format);
    else {
      this.props.history.replace("/month");
    }
  }

  render() {
    const { history, location, match, typeDisplay, ...rest } = this.props;
    const { format } = match.params;
    return format === typeDisplay ? <Calendar {...rest} /> : null;
  }
}

const mapStateToProps = state => ({
  data: getData(state),
  typeDisplay: getTypeDisplay(state)
});
const mapDispatchToProps = {
  setTypeDisplay,
  addEvent,
  deleteEvent,
  changeEvent,
  setCurrentDate
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CalendarContainer);
