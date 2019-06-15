import React from "react";
import css from "./Title.module.css";

const Title = ({ text }) => <h2 className={css.title}>{text}</h2>;
export default Title;
