import React from "react";
import css from "./Title.module.css";

const Title = ({ text, style = {} }) => (
  <h2 className={`${css.title} ${style}`}>{text}</h2>
);
export default Title;
