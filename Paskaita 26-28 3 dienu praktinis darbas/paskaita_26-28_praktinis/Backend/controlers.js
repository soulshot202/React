import User from "./Models/User.js";

export async function register(req, res) {
  const { name, email, password } = req.body;
  try {
    if (!name || !email || !password) {
      return res.json({
        success: false,
        message: "Please provide name, email and password",
      });
    }
    if (name.length > 32) {
      return res.json({
        success: false,
        message: "Name must be less than 32 characters",
      });
    }
    if (password.length > 30) {
      return res.json({
        success: false,
        message: "Password must be less than 30 characters",
      });
    }

    if (name.length < 6) {
      return res.json({
        success: false,
        message: "Name must be at least 6 characters",
      });
    }

    if (!email.includes("@")) {
      return res.json({
        success: false,
        message: "Please provide valid email",
      });
    }
    if (password.length < 6) {
      return res.json({
        success: false,
        message: "Password must be at least 6 characters",
      });
    }
    if (await User.findOne({ email })) {
      return res.json({
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
