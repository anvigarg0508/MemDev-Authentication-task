const jwt = require("jsonwebtoken");
const cors = require("cors");
const express = require("express");
const User = require("./models/User");

const app = express();
app.use(cors())

app.use(express.json());
// const users = [];

app.get("/", (req, res) => {
  res.send("Backend is working!");
});
app.post("/signup", async(req, res) => {
  const { name, email, password } = req.body;

  // Check if user already exists
  

  // Store new user
  const existingUser = await User.findOne({ email });

if (existingUser) {
  return res.json({
    success: false,
    message: "User already exists",
  });
}

await User.create({
  name,
  email,
  password,
});

res.json({
  success: true,
  message: "Signup Successful",
});
});

app.post("/login", async(req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({email});

  if (!user) {
    return res.json({
      success: false,
      message: "User not found",
    });
  }

  if (user.password !== password) {
    return res.json({
      success: false,
      message: "Incorrect Password",
    });
  }

  const token = jwt.sign(
    {
      email: user.email,
    },
    "mysecretkey"
  );

  res.json({
    success: true,
    message: "Login Successful",
    token,
  });
});

module.exports = app;