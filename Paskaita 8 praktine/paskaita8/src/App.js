import TodoList from "./components/TodoList/TodoList";
import axios from "axios";
import React, { useEffect, useState } from "react";
import AddTodo from "./components/addTodo/addTodo";

const ENDPOINT = "http://localhost:3001/todos";
function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const { data } = await axios.get(ENDPOINT);
      setTodos(data);
    };
    fetchTodos();
  });
  return (
    <div>
      <TodoList todos={todos} setTodos={setTodos} />
      <AddTodo setTodos={setTodos} />
    </div>
  );
}

export default App;
