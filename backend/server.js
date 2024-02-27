const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const SignUpModel = require("./models/Signup");
const bcrypt = require("bcryptjs");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/Users");

app.post("/login", async (req, res) => {
  const { signUpEmail, signUpPassword } = req.body;
  const user = await SignUpModel.findOne({ signUpEmail: signUpEmail });
  if (user) {
    if (user.signUpPassword === signUpPassword) {
      res.json("Success");
    } else {
      res.json("the password is incorrect");
    }
  } else {
    res.json("No record existed");
  }
});

app.post("/submit", async (req, res) => {
  try {
    console.log(req.body);

    const hashedPassword = await bcrypt.hash(signUpPassword, 10);

    const SignUp = new SignUpModel({
      userName: req.body.userName,
      signUpEmail: req.body.signUpEmail,
      signUpPassword: hashedPassword,
    });

    /*
    const login = new LoginModel({
      email: req.body.email,
      password: req.body.password,
    });
    */

    /*
    const user = await LoginModel.findOne({ email, password });

    if (user) {
      res.status(200).json({
        message: "Login successful!",
      });
    } else {
      res.status(401).json({
        message: "Invalid credentials",
      });
    }
    */

    const response = await SignUp.save();

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
