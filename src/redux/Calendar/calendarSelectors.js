import { createSelector } from "reselect";
import { getMonth, getWeek, TYPE_DISPLAY } from "../../util/calendarUtil";

export const getCurrentDate = state => state.currentDate;
export const getTypeDisplay = state => state.typeDisplay;
export const getEventDate = state => state.dateEvents.get("eventDate");
export const getAllEvents = state => state.events;
export const getColorEventById = (state, id) =>
  state.events.getIn([id, "color"]);

export const getEventsId = (state, props) =>
  state.dateEvents.getIn(Object.values(props.date));

export const getEventsOfDay = createSelector(
  [getEventsId, getAllEvents],
  (ids, events) => {
    if (ids) {
      return ids.map(id => events.get(id));
    }
    return undefined;
  }
);

export const getEventsByTime = createSelector(
  [getEventsOfDay, (state, props) => props.startTime],
  (events, startTime) => {
    if (events) {
      return events.filter(event => event.get("startTime") === startTime);
    }
    return events;
  }
);

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
