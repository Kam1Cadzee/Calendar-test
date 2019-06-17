import React from "react";
import Button from "../Shared/Button/Button";
import Title from "../Shared/Title/Title";
import { getNameMonth } from "../../util/calendarUtil";
import SelectContainer from "../container/SelectContainer";
import css from "./Header.module.css";

const Header = ({ setDateToday, backDate, nextDate, date, format }) => {
  return (
    <header className={css.header}>
      <Title text="Календар" />
      <Button onClick={setDateToday}>Сегодня</Button>
      <Button onClick={() => backDate(format)}>{"<"}</Button>
      <Button onClick={() => nextDate(format)}>{">"}</Button>
      <Title text={`${getNameMonth(date.getMonth())} ${date.getFullYear()}`} />
      <SelectContainer />
    </header>
  );
};
export default Header;
