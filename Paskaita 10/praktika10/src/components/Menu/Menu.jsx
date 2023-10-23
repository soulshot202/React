import React from "react";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <div>
      <Link to={"/"}>Home</Link>
      <Link to={"/about"}>About Us</Link>
      <Link to={"/news"}>News</Link>
      <Link to={"/services"}>Services</Link>
      <Link to={"/portfolio"}>Portfolio</Link>
      <Link to={"/contacts"}>Contact Us</Link>
    </div>
  );
}
