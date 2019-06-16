import dataCalendar from "../dataCalendar";
export const getNameMonth = date => dataCalendar.months[date.getMonth()];
export const getNameDayOfWeek = date => {
  const day = getLocalDay(convertToDate(date));
  return dataCalendar.weeks[day];
};

export const convertToDate = ({ year, month, date }) => {
  return new Date(year, month, date);
};
export const getParseDate = (date = new Date()) => {
  return {
    year: date.getFullYear(),
    month: date.getMonth(),
    date: date.getDate()
  };
};

export const getMonth = date => {
  const returnMonth = [];
  date.setDate(1);
  date.setMonth(date.getMonth() + 1);
  const endMonth = date.getMonth();
  date.setMonth(date.getMonth() - 1);
  const dayOfWeek = getLocalDay(date);
  date.setDate(date.getDate() - dayOfWeek);

  while (date.getMonth() !== endMonth) {
    const week = [];
    for (let i = 0; i < 7; i += 1) {
      week.push(getParseDate(date));
      date.setDate(date.getDate() + 1);
    }
    returnMonth.push(week);
  }

  return returnMonth;
};
export const getWeek = date => {
  const dayOfWeek = getLocalDay(date);
  date.setDate(date.getDate() - dayOfWeek);
  const week = [];
  for (let i = 0; i < 7; i += 1) {
    week.push(date.getDate());
    date.setDate(date.getDate() + 1);
  }
  return week;
};
export const getLocalDay = date => {
  var day = date.getDay();

  if (day === 0) {
    day = 7;
  }

  return day - 1;
};

export const TYPE_DISPLAY = {
  MONTH: "month",
  WEEK: "week",
  DAY: "day"
};
