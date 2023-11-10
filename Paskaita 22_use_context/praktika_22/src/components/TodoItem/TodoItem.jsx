import React from "react";

export default function TodoItem({ id, title, completed }) {
  return (
    <div>
      <h4>TodoItem</h4>
      <p>Todo: {title}</p>
      <p>
        Completed:{" "}
        {completed ? (
          <input type="checkbox" checked />
        ) : (
          <input type="checkbox" />
        )}
      </p>
    </div>
  );
}
