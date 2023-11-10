import React from "react";
import AddTodo from "../AddTodo/AddTodo";
import TodoItem from "../TodoItem/TodoItem";
import { todoContext } from "../../App";
import { useContext } from "react";

export default function TodoList() {
  const { todosList } = useContext(todoContext);
  return (
    <div>
      <AddTodo />
      {todosList.map((todo) => (
        <TodoItem key={todo.id} title={todo.title} completed={todo.completed} />
      ))}
    </div>
  );
}
