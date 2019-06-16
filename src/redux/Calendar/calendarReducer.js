import { List, Map } from "immutable";
import {
  ADD_EVENT,
  BACK_DATE_WITH_ANY_FORMAT,
  CHANGE_EVENT,
  DELETE_EVENT,
  NEXT_DATE_WITH_ANY_FORMAT,
  SET_CURRENT_DATE,
  SET_CURRENT_DATE_TODAY,
  SET_TYPE_DISPLAY
} from "./calendarTypes";
import { combineReducers } from "redux";
import { TYPE_DISPLAY } from "../../util/calendarUtil";

const getParseDate = (date = new Date()) => {
  return {
    year: date.getFullYear(),
    month: date.getMonth(),
    date: date.getDate()
  };
};
const formatReducer = (state = TYPE_DISPLAY.MONTH, { type, payload }) => {
  switch (type) {
    case SET_TYPE_DISPLAY:
      return payload;
    default:
      return state;
  }
};
const init = {
  events: {
    qweqw: { text: "sadas", time: "12/12/12" }
  },
  currentDate: new Date(),
  data: {
    dateEvent: [2019, 5, 15],
    "2019": {
      "5": {
        "15": [1, 2, 3],
        "4": [6, 9]
      },
      "6": {
        "1": [12, 23]
      }
    }
  }
};

const eventsReducer = (state = new Map(), { type, payload }) => {
  switch (type) {
    case ADD_EVENT:
      return state.set(payload.id, payload.event);
    case DELETE_EVENT:
      return state.delete(payload);
    case CHANGE_EVENT:
      return state.update(payload.id, value => value.merge(payload.event));
    default:
      return state;
  }
};
const currentDate = (state = getParseDate(), { type, payload }) => {
  switch (type) {
    case SET_CURRENT_DATE:
      return { ...state, date: payload };
    case BACK_DATE_WITH_ANY_FORMAT:
      return getParseDate(new Date(state.year, state.month - 1, state.date));
    case NEXT_DATE_WITH_ANY_FORMAT:
      return getParseDate(new Date(state.year, state.month + 1, state.date));
    case SET_CURRENT_DATE_TODAY:
      return getParseDate();
    default:
      return state;
  }
};

const dataReducer = (
  state = new Map({ currentDate: getParseDate() }),
  { type, payload }
) => {
  switch (type) {
    case ADD_EVENT:
      return state.updateIn(Object.values(state.get("currentDate")), events => {
        if (!events) {
          return new List([payload.id]);
        }
        return events.push(payload.id);
      });
    case DELETE_EVENT:
      const index = state
        .getIn(Object.values(payload.date))
        .findIndex(id => id === payload);
      return state.deleteIn([
        ...Object.values(state.get("currentDate")),
        index
      ]);
    case SET_CURRENT_DATE:
    case BACK_DATE_WITH_ANY_FORMAT:
    case NEXT_DATE_WITH_ANY_FORMAT:
    case SET_CURRENT_DATE_TODAY:
      return state.update("currentDate", date =>
        currentDate(date, { type, payload })
      );
    default:
      return state;
  }
};
export default combineReducers({
  events: eventsReducer,
  dateEvents: dataReducer,
  typeDisplay: formatReducer
});
