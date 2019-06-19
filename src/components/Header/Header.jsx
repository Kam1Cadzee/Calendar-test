import React from "react";
import Button from "../Shared/Button/Button";
import Title from "../Shared/Title/Title";
import { getNameMonth } from "../../util/calendarUtil";
import SelectContainer from "../container/SelectContainer";
import css from "./Header.module.css";
import ButtonIcon from "../Shared/ButtonIcon/ButtonIcon";

const Header = ({ setDateToday, backDate, nextDate, date, format }) => {
  return (
    <header className={css.header}>
      <Title style={css.title} text="Календар" />
      <div className={css.controls}>
        <ButtonIcon onClick={() => backDate(format)}>
          <i className="material-icons">keyboard_arrow_left</i>
        </ButtonIcon>
        <Button onClick={setDateToday}>Сегодня</Button>
        <ButtonIcon onClick={() => nextDate(format)}>
          <i className="material-icons">keyboard_arrow_right</i>
        </ButtonIcon>
      </div>
      <Title
        style={css.date}
        text={`${getNameMonth(date.getMonth())} ${date.getFullYear()}`}
      />
      <SelectContainer style={css} />
    </header>
  );
};
export default Header;
