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
import * as shortid from "shortid";
import { Map } from "immutable";

export const backDate = format => ({
  type: BACK_DATE_WITH_ANY_FORMAT,
  payload: format
});
export const nextDate = format => ({
  type: NEXT_DATE_WITH_ANY_FORMAT,
  payload: format
});
export const setCurrentDateToday = () => ({
  type: SET_CURRENT_DATE_TODAY
});
export const setCurrentDate = date => ({
  type: SET_CURRENT_DATE,
  payload: date
});

export const addEvent = event => {
  const id = shortid.generate();
  return {
    type: ADD_EVENT,
    payload: {
      id,
      event: new Map({ ...event, id })
    }
  };
};
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

export const setEventDate = date => ({
  type: SET_DATE_EVENT,
  payload: date
});

export const setTypeDisplay = format => ({
  type: SET_TYPE_DISPLAY,
  payload: format
});
