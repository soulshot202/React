import React from "react";
import { todoContext } from "../../App";
import { useContext } from "react";
import { useState } from "react";

export default function AddTodo() {
  const { todosList, setTodosList } = useContext(todoContext);
  const [isTodoCompleted, setIsTodoCompleted] = useState(false);
  const [newTodo, setNewTodo] = useState("");
  function addTodo() {
    const todosCopy = [...todosList];
    todosCopy.unshift({
      id: todosCopy.length + 1,
      title: newTodo,
      completed: isTodoCompleted,
    });
    setTodosList(todosCopy);
  }

  return (
    <div>
      <h2>Add Todo</h2>
      <input
        type="text"
        placeholder="Todo"
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <p>Completed:</p>
      <input
        type="checkbox"
        onClick={() => setIsTodoCompleted(!isTodoCompleted)}
      />
      {/* <select
        onSelect={(e) => {
          setIsTodoCompleted(e.target.value);
        }}>
        <option value="false">No</option>
        <option value="true">Yes</option>
      </select> */}
      <br />

      <button onClick={addTodo}>Add</button>
    </div>
  );
}
