const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const SignUpModel = require("./models/Signup");
/*
const bcrypt = require("bcryptjs");
*/

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/SignUp");

app.post("/SignUpsubmit", async (req, res) => {
  try {
    console.log(req.body);

    // Hash the password
    /*
    const hashedPassword = await bcrypt.hash(signUpPassword, 10);
    */
    const SignUp = new SignUpModel({
      userName: req.body.userName,
      signUpEmail: req.body.signUpEmail,
      signUpPassword: req.body.signUpPassword,
    });

    /*
    // Check if email is unique
    const existingEmail = await SignUpModel.findOne({ signUpEmail });
    if (existingEmail) {
      return res.status(400).json({
        message: "Email is already in use",
      });
    }

    // Check if username is unique
    const existingUsername = await SignUpModel.findOne({ userName });
    if (existingUsername) {
      return res.status(400).json({
        message: "Username is already in use",
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

app.listen(8080, () => {
  console.log("server is running");
});
