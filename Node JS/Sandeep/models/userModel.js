const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
});

// create a model
const UserModel = mongoose.model("users", userSchema);
module.exports = UserModel
