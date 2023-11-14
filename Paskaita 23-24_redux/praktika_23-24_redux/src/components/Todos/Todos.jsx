import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addTodo,
  removeTodo,
  toggleTodo,
  filterTodos,
} from "../../redux/todos/todosSlice";

export default function Todos() {
  const todos = useSelector((state) => state.todos);
  const [newTodo, setNewTodo] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);
  const dispatch = useDispatch();
  console.log(todos);

  return (
    <div>
      <h1>Todos</h1>
      <button onClick={() => dispatch(filterTodos("completed"))}>
        show completed
      </button>
      <button onClick={() => dispatch(filterTodos("not-completed"))}>
        show NOT completed
      </button>
      <button onClick={() => dispatch(filterTodos("all"))}> show all</button>
      <br />

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => dispatch(toggleTodo(todo.id))}
            />
            {todo.title}
            <button onClick={() => dispatch(removeTodo(todo.id))}>
              Remove
            </button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="new todo"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <input
        type="checkbox"
        id="completed"
        onChange={(e) => setIsCompleted(e.target.checked)}
      />
      <label htmlFor="completed">Completed</label>
      <button
        onClick={() =>
          dispatch(
            addTodo({
              id: todos.length + 1,
              title: newTodo,
              completed: isCompleted,
            })
          )
        }>
        Add Todo
      </button>
    </div>
  );
}
