import express from "express";
import cors from "cors";
const app = express();

app.use(cors());
app.use(express.json());

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === "admin" && password === "admin") {
    res.status(200).json({ message: "Login successful" });
  } else {
    res.status(401).json({ status: "error" });
  }
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
