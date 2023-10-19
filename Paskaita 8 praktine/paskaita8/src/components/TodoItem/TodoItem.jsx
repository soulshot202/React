import React, { useEffect, useState } from "react";
import style from "./TodoItem.module.css";
import Button from "../Button/Button";
import axios from "axios";

export default function TodoItem({ todo, setTodos }) {
  return (
    <div className={style.todoItem}>
      <h6>Title</h6>
      <h3>{todo.title}</h3>
      <h6>Description</h6>
      <p>{todo.description}</p>
      <h6>Is completed?</h6>
      <p>{todo.completed ? "Completed" : "Not completed"}</p>
      {/* <Button
        btnName={"Delete todo"}
        onClick={() => {
          axios.delete(`http://localhost:3001/todos/${todo._id}`);
          setTodos((todos) => todos.filter((t) => t._id !== todo._id));
        }}
      /> */}
    </div>
  );
}
