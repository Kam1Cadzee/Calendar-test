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
import { Map } from "immutable";

export const backDate = () => ({ type: BACK_DATE_WITH_ANY_FORMAT });
export const nextDate = () => ({ type: NEXT_DATE_WITH_ANY_FORMAT });

export const addEvent = event => ({
  type: ADD_EVENT,
  payload: {
    id: shortid.generate(),
    event: new Map(event)
  }
});
export const deleteEvent = id => ({
  type: DELETE_EVENT,
  payload: id
});
export const changeEvent = (id, event) => ({
  type: CHANGE_EVENT,
  payload: {
    id,
    event: new Map(event)
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
