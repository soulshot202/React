import React, { useState } from "react";
import style from "./Comment.module.css";

export default function Comment({ name, body }) {
  return (
    <div className={style.comment}>
      <h6>
        <span>Name: </span>
        {name}
      </h6>
      <p className={style.com}>Comment:</p>
      <p>{body}</p>
    </div>
  );
}
