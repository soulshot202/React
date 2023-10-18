import styles from "./App.css";
import TodoList from "./components/TodoList/TodoList";
import Button from "./components/Button/Button";
import React, { useEffect, useState, useRef } from "react";
import addTodo from "./components/addTodo/addTodo";

function App() {
  const [disp, setDisp] = useState("App");
  const [addTodo, setAddTodo] = useState("on");

  return (
    <>
      <div className={disp}>
        <TodoList className="off" />

        <Button
          btnName="Add new Todo"
          onClick={() => {
            setDisp("off");
          }}
        />
      </div>
      <div className={addTodo}>
        <addTodo />
      </div>
    </>
  );
}

export default App;
