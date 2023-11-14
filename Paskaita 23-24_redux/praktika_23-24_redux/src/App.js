import "./App.css";
import Todos from "./components/Todos/Todos";
import Users from "./components/Users/Users";
import { useDispatch } from "react-redux";
import { getUsersAsync } from "./redux/users/usersSlice";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersAsync());
  }, []);
  return (
    <div>
      <Todos />
      <br />
      <Users />
    </div>
  );
}

export default App;
