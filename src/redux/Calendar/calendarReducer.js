import { List, Map } from "immutable";
import {
  ADD_EVENT,
  BACK_DATE_WITH_ANY_FORMAT,
  CHANGE_EVENT,
  DELETE_EVENT,
  NEXT_DATE_WITH_ANY_FORMAT,
  SET_DATE_EVENT,
  SET_CURRENT_DATE_TODAY,
  SET_TYPE_DISPLAY,
  SET_CURRENT_DATE
} from "./calendarTypes";
import { combineReducers } from "redux";
import { getParseDate, TYPE_DISPLAY } from "../../util/calendarUtil";

const formatReducer = (state = TYPE_DISPLAY.MONTH, { type, payload }) => {
  switch (type) {
    case SET_TYPE_DISPLAY:
      return payload;
    default:
      return state;
  }
};

const eventsReducer = (state = new Map(), { type, payload }) => {
  switch (type) {
    case ADD_EVENT:
      return state.set(payload.id, payload.event);
    case DELETE_EVENT:
      return state.delete(payload);
    case CHANGE_EVENT:
      return state.update(payload.id, value => {
        return value.merge(payload.event);
      });
    default:
      return state;
  }
};

const currentDateReducer = (state = new Date(), { type, payload }) => {
  switch (type) {
    case BACK_DATE_WITH_ANY_FORMAT: {
      const newDate = new Date(state);
      if (payload === TYPE_DISPLAY.MONTH)
        newDate.setMonth(newDate.getMonth() - 1);
      else if (payload === TYPE_DISPLAY.WEEK)
        newDate.setDate(newDate.getDate() - 7);
      else if (payload === TYPE_DISPLAY.DAY)
        newDate.setDate(newDate.getDate() - 1);

      return newDate;
    }
    case NEXT_DATE_WITH_ANY_FORMAT:
      const newDate = new Date(state);
      if (payload === TYPE_DISPLAY.MONTH)
        newDate.setMonth(newDate.getMonth() + 1);
      else if (payload === TYPE_DISPLAY.WEEK)
        newDate.setDate(newDate.getDate() + 7);
      else if (payload === TYPE_DISPLAY.DAY)
        newDate.setDate(newDate.getDate() + 1);
      return newDate;
    case SET_CURRENT_DATE_TODAY:
      return new Date();
    case SET_CURRENT_DATE:
      return payload;
    default:
      return state;
  }
};
const dateEventReducer = (state = getParseDate(), { type, payload }) => {
  switch (type) {
    case SET_DATE_EVENT:
      return { ...state, ...payload };
    default:
      return state;
  }
};

const dataReducer = (
  state = new Map({ eventDate: getParseDate() }),
  { type, payload }
) => {
  switch (type) {
    case ADD_EVENT:
      return state.updateIn(Object.values(state.get("eventDate")), events => {
        if (!events) {
          return new List([payload.id]);
        }
        return events.push(payload.id);
      });
    case DELETE_EVENT:
      const index = state
        .getIn(Object.values(state.get("eventDate")))
        .findIndex(id => id === payload);
      return state.deleteIn([...Object.values(state.get("eventDate")), index]);
    case SET_DATE_EVENT:
    case BACK_DATE_WITH_ANY_FORMAT:
    case NEXT_DATE_WITH_ANY_FORMAT:
    case SET_CURRENT_DATE_TODAY:
      return state.update("eventDate", date =>
        dateEventReducer(date, { type, payload })
      );
    default:
      return state;
  }
};
export default combineReducers({
  events: eventsReducer,
  dateEvents: dataReducer,
  typeDisplay: formatReducer,
  currentDate: currentDateReducer
});
