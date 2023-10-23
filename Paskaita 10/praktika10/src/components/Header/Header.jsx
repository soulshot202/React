import React from "react";

import "./Header.module.css";
import Menu from "../Menu/Menu";

export default function Header() {
  return (
    <header>
      <img
        src="https://upload.wikimedia.org/wikipedia/en/b/b1/Mortal_Kombat_Logo.svg"
        alt=""
      />
      <Menu />
      <div></div>
    </header>
  );
}
