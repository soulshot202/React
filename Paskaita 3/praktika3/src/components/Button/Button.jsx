import React from "react";
import style from "./Button.module.css";

export default function Button({ text, onClick, bckColor }) {
  return (
    <button
      className={style.button}
      style={{ backgroundColor: bckColor }}
      onClick={onClick}>
      {text}
    </button>
  );
}
