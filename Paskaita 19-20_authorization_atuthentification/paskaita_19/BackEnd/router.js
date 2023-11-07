import express from "express";
import { register, login, getUsers } from "./controlers.js";
import { validateJwt } from "./middleware.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/users", validateJwt, getUsers);

export default router;
