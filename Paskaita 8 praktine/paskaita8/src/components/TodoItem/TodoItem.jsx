import React from "react";
import style from "./TodoItem.module.css";

export default function TodoItem({ todo }) {
  return (
    <div className={style.todoItem}>
      <h6>Title</h6>
      <h3>{todo.title}</h3>
      <h6>Description</h6>
      <p>{todo.description}</p>
      <h6>Is completed?</h6>
      <p>{todo.completed ? "Completed" : "Not completed"}</p>
    </div>
  );
}
