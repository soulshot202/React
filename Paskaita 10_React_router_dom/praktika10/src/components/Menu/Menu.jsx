import React from "react";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <div>
      <Link to={"/"}>Pagrindinis</Link>
      <Link to={"/about"}>Apie mus</Link>
      <Link to={"/news"}>Naujienos</Link>
      <Link to={"/services"}>Paslaugos</Link>
      <Link to={"/portfolio"}>Portfolio</Link>
      <Link to={"/contacts"}>Kontaktai</Link>
    </div>
  );
}
