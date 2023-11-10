import React from "react";

export default function TodoItem({ id, title, completed }) {
  return (
    <div>
      <h4>TodoItem</h4>
      <p>Todo: {title}</p>
      <p>Completed: {completed ? "Yes" : "No"}</p>
    </div>
  );
}
