import React, { useRef } from "react";
import Button from "../Button/Button";
import style from "./addTodo.module.css";
import axios from "axios";

const ENDPOINT = "http://localhost:3001/todos";

export default function AddTodo({ setTodos }) {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const completedRef = useRef();

  async function addTodos() {
    const { data } = await axios.post(ENDPOINT, {
      title: titleRef.current.value,
      description: descriptionRef.current.value,
      completed: completedRef.current.value,
    });
    setTodos((todos) => [...todos, data]);
  }

  return (
    <div className={style.addTodo}>
      <h1>Create new Todo</h1>
      <label>Todo title</label>
      <input min={5} ref={titleRef} type="text"></input>
      <label>Todo description</label>
      <input min={5} ref={descriptionRef} type="text"></input>
      <label>Todo completed</label>

      <select ref={completedRef}>
        <option value="true">Yes</option>
        <option value="false">No</option>
      </select>
      <Button
        btnName="Add new Todo"
        onClick={() => {
          if (
            titleRef.current.value === "" ||
            descriptionRef.current.value === ""
          ) {
            return alert("Please fill all fields");
          } else {
            addTodos();
            titleRef.current.value = "";
            descriptionRef.current.value = "";
          }
        }}
      />
    </div>
  );
}
