import React from "react";
import Button from "../Shared/Button/Button";
import Title from "../Shared/Title/Title";
import { getNameMonth } from "../../util/calendarUtil";
import SelectContainer from "../container/SelectContainer";
import css from "./Header.module.css";

const Header = ({ setDateToday, backDate, nextDate, date }) => {
  return (
    <header className={css.header}>
      <Title text="Календар" />
      <Button onClick={setDateToday}>Сегодня</Button>
      <Button onClick={backDate}>{"<"}</Button>
      <Button onClick={nextDate}>{">"}</Button>
      <Title text={`${getNameMonth(date)} ${date.year}`} />
      <SelectContainer />
    </header>
  );
};
export default Header;
