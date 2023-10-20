import React from "react";
import TodoItem from "../TodoItem/TodoItem";
import Button from "../Button/Button";
import axios from "axios";

import style from "./TodoList.module.css";

export default function TodoList({ display, todos, setTodos }) {
  return (
    <div className={style.todoList} display={display}>
      {todos.map((todo) => (
        <div className={style.todoItem}>
          <TodoItem todo={todo} key={todo.id} setTodos={setTodos} />
          <Button
            btnName={"Delete todo"}
            onClick={async () => {
              await axios.delete(`http://localhost:3001/todos/${todo._id}`);
              setTodos((todos) => todos.filter((t) => t._id !== todo._id));
            }}
          />
        </div>
      ))}
    </div>
  );
}
