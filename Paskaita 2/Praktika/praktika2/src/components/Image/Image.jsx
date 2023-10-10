import React from "react";
import style from "./Image.module.css";

export default function Image({ imgSrc, description }) {
  return (
    <div className={style.img}>
      <img src={imgSrc} alt={description} />
      <p>{description}</p>
    </div>
  );
}
