import { getCurrentDate } from "../../redux/Calendar/calendarSelectors";
import {
  backDate,
  nextDate,
  setCurrentDateToday
} from "../../redux/Calendar/calendarActions";
import { connect } from "react-redux";
import Header from "../Header/Header";

const mapStateToProps = state => ({
  date: getCurrentDate(state)
});

const mapDispatchToProps = {
  setDateToday: setCurrentDateToday,
  backDate,
  nextDate
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
