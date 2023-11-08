import dotenv from "dotenv";
import Jwt from "jsonwebtoken";

dotenv.config();

export async function validateJwt(req, res, next) {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  const token = authorization.split(" ")[1];
  try {
    const decoded = Jwt.verify(token, process.env.JWT_SECRET);
    req.user = {
      id: decoded.id,
      username: decoded.username,
    };
    console.log("first validation  step done", req.user);
    next();
  } catch (error) {
    return res.status(401).json({ message: "invalid token" });
  }
}
