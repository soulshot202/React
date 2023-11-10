import "./App.css";
import { createContext } from "react";
import Header from "./components/Header/Header";
import TodoList from "./components/TodoList/TodoList";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
export const todoContext = createContext();
const todosEndpoint = "http://jsonplaceholder.typicode.com/todos";

function App() {
  const [todosList, setTodosList] = useState([]);

  async function getTodos() {
    await axios
      .get(todosEndpoint)
      .then(({ data }) => setTodosList(data))
      .catch((err) => console.log(err));
  }
  useEffect(() => {
    getTodos();
  }, []);
  console.log(todosList);
  return (
    <div>
      <Header />
      <todoContext.Provider value={{ todosList, setTodosList }}>
        <TodoList />
      </todoContext.Provider>
    </div>
  );
}

export default App;
