const jwt = require("jsonwebtoken");
const cors = require("cors");
const express = require("express");

const app = express();
app.use(cors())

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend is working!");
});

app.post("/login", (req, res) => {
    const {email,password} = req.body;

    console.log(email);
    console.log(password);

  if (
    email === "admin@gmail.com" &&
    password === "1234"
  ) {
    const token = jwt.sign(
        {
            email : email,
        },
        "mysecretkey"
    );

    return res.json(
        {
            success: true,
            message:"Login Successful",
            token: token,
        }
    );
  }

  res.json({
    success: false,
    message: "Invalid Credentials",
  });
});

module.exports = app;