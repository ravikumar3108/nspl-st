const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username:String,
  firstname: String,
  lastname: String,
  email: String,
  password:String,
  gender:String
});

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
