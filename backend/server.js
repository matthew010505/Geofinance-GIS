const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const LoginModel = require("./models/Login");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/Login");

app.post("/submit", async (req, res) => {
  try {
    console.log(req.body);
    const login = new LoginModel({
      email: req.body.email,
      password: req.body.password,
    });
    const response = await login.save();
    if (response) {
      console.log("data saved");
      res.status(201).json({
        message: "Data saved successfully!",
      });
    }
  } catch (err) {
    console.log(err);
    res.status(501).json({
      message: "Internal Server Error",
    });
  }
});

app.listen(5173, () => {
  console.log("server is running");
});
