import mongoose from "mongoose";
import Todo from "./models/todo.js";

export async function addTodo(req, res) {
  const { title, description, completed } = req.body;
  try {
    const todo = new Todo({ title, description, completed });
    await todo.save();
    res.json(todo);
  } catch (error) {
    res.status(500).json(error);
  }
}

export async function getTodos(req, res) {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    res.status(500).json(error);
  }
}

export async function deleteTodo(req, res) {
  const { id } = req.params;
  try {
    const todo = await Todo.findById(id);
    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    } else {
      await Todo.findByIdAndDelete(id);
      res.json({ message: "Todo deleted successfully" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
}
