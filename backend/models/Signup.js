const mongoose = require("mongoose");

const SignUpSchema = new mongoose.Schema({
  userName: String,
  signUpEmail: String,
  signUpPassword: String
});

const SignUpModel = mongoose.model("Users", SignUpSchema);
module.exports=SignUpModel;

