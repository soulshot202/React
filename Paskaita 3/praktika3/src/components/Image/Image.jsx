import React from "react";
import style from "./Image.module.css";

export default function Image({ url }) {
  return <img className={style.image} src={url} alt="" />;
}
