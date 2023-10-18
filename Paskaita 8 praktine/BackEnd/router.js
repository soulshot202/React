import express from "express";
import { addTodo, deleteTodo, getTodos } from "./controlers.js";

const router = express.Router();

router.get("/todos", getTodos);
router.post("/todos", addTodo);
router.delete("/todos/:id", deleteTodo);

export default router;
