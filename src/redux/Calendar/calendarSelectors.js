import { createSelector } from "reselect";
import {
  convertToDate,
  getMonth,
  getWeek,
  TYPE_DISPLAY
} from "../../util/calendarUtil";

export const getCurrentDate = state => state.currentDate;
export const getTypeDisplay = state => state.typeDisplay;

export const getData = createSelector(
  [getCurrentDate, getTypeDisplay],
  (date, type) => {
    const convertOfDate = convertToDate(date);
    switch (type) {
      case TYPE_DISPLAY.MONTH:
        return getMonth(convertOfDate);
      case TYPE_DISPLAY.WEEK:
        return getWeek(convertOfDate);
      default:
        return getMonth(convertOfDate);
    }
  }
);
