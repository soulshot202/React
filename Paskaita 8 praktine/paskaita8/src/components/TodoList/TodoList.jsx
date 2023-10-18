import React, { useEffect, useState } from "react";
import TodoItem from "../TodoItem/TodoItem";
import axios from "axios";
import style from "./TodoList.module.css";

const ENDPOINT = "http://localhost:3001/todos";

export default function TodoList({ display }) {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const { data } = await axios.get(ENDPOINT);
      setTodos(data);
    };
    fetchTodos();
  }, []);
  console.log(todos);

  return (
    <div className={style.todoList} display={display}>
      {todos.map((todo) => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </div>
  );
}
