import React from "react";
import Button from "../Button/Button";

export default function addTodo() {
  return (
    <div>
      <h1>addTodo</h1>
      <label>Todo title</label>
      <input type="text"></input>
      <label>Todo description</label>
      <input type="text"></input>
      <label>Todo completed</label>

      <select>
        <option value="true">true</option>
        <option value="false">false</option>
      </select>
      <Button btnName="Add Todo " />
    </div>
  );
}
