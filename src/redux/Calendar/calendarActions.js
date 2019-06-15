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
import * as shortid from "shortid";

export const backDate = () => ({ type: BACK_DATE_WITH_ANY_FORMAT });
export const nextDate = () => ({ type: NEXT_DATE_WITH_ANY_FORMAT });

export const addEvent = (event, date) => ({
  type: ADD_EVENT,
  payload: {
    id: shortid.generate(),
    event,
    date
  }
});
export const deleteEvent = (id, date) => ({
  type: DELETE_EVENT,
  payload: { id, date }
});
export const changeEvent = (id, event) => ({
  type: CHANGE_EVENT,
  payload: {
    id,
    event
  }
});

export const setCurrentDate = date => ({
  type: SET_CURRENT_DATE,
  payload: date
});
export const setCurrentDateToday = () => ({
  type: SET_CURRENT_DATE_TODAY
});
export const setTypeDisplay = format => ({
  type: SET_TYPE_DISPLAY,
  payload: format
});
