import { createSelector } from "reselect";
import {
  convertToDate,
  getMonth,
  getWeek,
  TYPE_DISPLAY
} from "../../util/calendarUtil";

export const getCurrentDate = state => state.currentDate;
export const getTypeDisplay = state => state.typeDisplay;
export const getEventDate = state => state.dateEvents.get("eventDate");
export const getColorEventById = (state, id) =>
  state.events.get(id).get("color");

export const getEventsId = (state, props) =>
  state.dateEvents.getIn(Object.values(props.date));

export const getEventsOfDay = (state, props) => {
  const ids = getEventsId(state, props);
  if (ids) {
    return ids.map(id => state.events.get(id));
  }
  return undefined;
};
export const getData = createSelector(
  [getCurrentDate, getTypeDisplay],
  (date, type) => {
    const param = new Date(date);
    switch (type) {
      case TYPE_DISPLAY.MONTH:
        return getMonth(param);
      case TYPE_DISPLAY.WEEK:
        return getWeek(param);
      default:
        return getMonth(param);
    }
  }
);
