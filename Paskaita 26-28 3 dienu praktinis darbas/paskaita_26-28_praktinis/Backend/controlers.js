import User from "./Models/User.js";

export async function register(req, res) {
  const { name, email, password } = req.body;
  try {
    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please provide name, email and password",
      });
    }
    if (name.length > 32) {
      return res.status(402).json({
        success: false,
        message: "Name must be less than 32 characters",
      });
    }
    if (password.length > 30) {
      return res.status(401).json({
        success: false,
        message: "Password must be less than 30 characters",
      });
    }

    if (name.length < 6) {
      return res.status(402).json({
        success: false,
        message: "Name must be at least 6 characters",
      });
    }

    if (!email.includes("@")) {
      return res.status(403).json({
        success: false,
        message: "Please provide valid email",
      });
    }
    if (!email.includes(".")) {
      return res.status(404).json({
        success: false,
        message: "Please provide valid email",
      });
    }
    if (password.length < 6) {
      return res.status(401).json({
        success: false,
        message: "Password must be at least 6 characters",
      });
    }
    if (email.length > 50 || email.length < 6) {
      return res.status(405).json({
        success: false,
        message: "Email must be between 6 and 50 characters",
      });
    }
    if (await User.findOne({ email })) {
      return res.status(409).json({
        success: false,
        message: "User with this email already exists",
      });
    }

    const user = new User({
      name,
      email,
      password,
    });

    await user.save();

    res.json({
      user,
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: "Internal server error",
    });
  }
}
