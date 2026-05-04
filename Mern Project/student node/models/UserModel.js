const mongoose = require("mongoose");

const userschema = new mongoose.Schema({
  username: {
    type: String,
    // unique: true,
    // trim: true,
  },
  email: {
    type: String,
  },
  name: {
    type: String,
  },
  password: {
    type: String,
  },
  address: String,
  phoneno: String,
  image: {
    data: Buffer,
    ContentType: String,
  },
});

// Create a Model :-
const User = mongoose.model("user", userschema);
module.exports = User;
