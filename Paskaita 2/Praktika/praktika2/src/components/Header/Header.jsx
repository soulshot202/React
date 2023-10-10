import React from "react";
import style from "./Header.module.css";
import Button from "../Button/Button";

export default function Header() {
  return (
    <header className={style.header}>
      <h1>Mano Puslapis</h1>
      <p>Lorem ipsum dolor sit amet.</p>
      <div>
        {" "}
        <Button />
      </div>
    </header>
  );
}
