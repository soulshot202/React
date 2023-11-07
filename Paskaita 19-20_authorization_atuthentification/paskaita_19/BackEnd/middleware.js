import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
export async function validateJwt(req, res, next) {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  const token = authorization.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = {
      id: decoded.id,
      username: decoded.username,
    };

    next();
  } catch (error) {
    return res.status(401).json({ message: "invalid token" });
  }
}
