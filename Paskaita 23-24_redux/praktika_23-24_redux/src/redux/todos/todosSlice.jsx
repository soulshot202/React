import { createSlice } from "@reduxjs/toolkit";

let todosList = [
  {
    id: 1,
    title: "Todo 1",
    completed: false,
  },
  {
    id: 2,
    title: "Todo 2",
    completed: true,
  },
  {
    id: 3,
    title: "Todo 3",
    completed: false,
  },
  {
    id: 4,
    title: "Todo 4",
    completed: true,
  },
];

const initialState = todosList;

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    removeTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
    toggleTodo: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload);
      todo.completed = !todo.completed;
    },
    filterTodos: (state, action) => {
      state.map((todo) => todo.completed);
      console.log(state);
      // if (action.payload === "completed") {
      //   return state.filter((todo) => todo.completed);
      // } else if (action.payload === "not-completed") {
      //   return state.filter((todo) => !todo.completed);
      // } else {
      //   return state;
      // }
    },
  },
});

export const { addTodo, removeTodo, toggleTodo, filterTodos } =
  todosSlice.actions;

export default todosSlice.reducer;
