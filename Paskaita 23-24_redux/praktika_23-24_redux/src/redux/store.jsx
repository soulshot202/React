import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todos/todosSlice";
import usersReducer from "./users/usersSlice";

export const store = configureStore({
  reducer: {
    todos: todoReducer,
    users: usersReducer,
  },
});
