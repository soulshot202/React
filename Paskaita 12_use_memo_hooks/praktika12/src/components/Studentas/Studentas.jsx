import React from "react";
import stilius from "./Studentas.module.css";

export default function StudentItem({ name, age, id }) {
  return (
    <div className={stilius.studentItem}>
      <h1>Student Card</h1>
      <p>
        <span>Name: </span>
        {name}
      </p>
      <p>
        <span>Age: </span>
        {age}
      </p>
      <p>
        <span>Id: </span>
        {id}
      </p>
    </div>
  );
}
