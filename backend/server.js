const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const SignUpModel = require("./models/Signup");
const bcrypt = require("bcryptjs");
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.ATLAS_URL);

app.post("/login", async (req, res) => {
  const { signUpEmail, signUpPassword } = req.body;
  const user = await SignUpModel.findOne({ signUpEmail: signUpEmail });
  if (user) {
    bcrypt.compare(
      signUpPassword,
      user.signUpPassword,
      (err, passwordMatch) => {
        if (err) {
          console.error("Error during password comparison");
          res.status(500).json({
            message: "Internal Server Error",
          });
        } else {
          if (passwordMatch) {
            console.log("Login Successfully");
            res.status(201).json({
              message: "Login Successfully",
            });
          } else {
            console.log("Password did not match");
            res.status(401).json({
              message: "Password did not match",
            });
          }
        }
      }
    );
  } else {
    res.status(401).json({
      message: "Incorrect Email ID",
    });
  }
});

app.post("/submit", async (req, res) => {
  try {
    console.log(req.body);
    const { userName, signUpEmail, signUpPassword } = req.body;

    const hashedPassword = await bcrypt.hash(signUpPassword, 10);

    const SignUp = new SignUpModel({
      userName: req.body.userName,
      signUpEmail: req.body.signUpEmail,
      signUpPassword: hashedPassword,
    });

    //check if username exists
    const username = await SignUpModel.findOne({ userName : userName});
    if(username){
      res.status(401).json({
        message:"UserName already Exists!",
      })
    }else{
      //check if email exists
      const uniqemail = await SignUpModel.findOne({ signUpEmail: signUpEmail});
      if(uniqemail){
        res.status(401).json({
          message:"Email already Exists!",
        })
      }else{
        const response = await SignUp.save();

        if (response) {
          console.log("data saved");
          res.status(201).json({
            message: "Data saved successfully!",
          });
        } else{
          res.status(401).json({
            message: "Internal Server Error",
          })
        }
      }
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
