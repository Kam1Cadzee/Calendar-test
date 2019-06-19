import { getTypeDisplay } from "../../redux/Calendar/calendarSelectors";
import { setTypeDisplay } from "../../redux/Calendar/calendarActions";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import Select from "../Shared/Select/Select";
import React from "react";
import { TYPE_DISPLAY } from "../../util/calendarUtil";

const options = [
  { label: "Месяц", value: TYPE_DISPLAY.MONTH },
  { label: "Неделя", value: TYPE_DISPLAY.WEEK }
];

class SelectContainer extends React.Component {
  handleChangeValue = ({ target }) => {
    const { setTypeDisplay, history } = this.props;
    setTypeDisplay(target.value);
    history.push(`/${target.value}`);
  };
  render() {
    const { typeDisplay, style } = this.props;
    return (
      <Select
        options={options}
        value={typeDisplay}
        onChange={this.handleChangeValue}
        style={style}
      />
    );
  }
}
const mapStateToProps = state => ({
  typeDisplay: getTypeDisplay(state)
});

const mapDispatchToProps = {
  setTypeDisplay
};
export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withRouter
)(SelectContainer);
