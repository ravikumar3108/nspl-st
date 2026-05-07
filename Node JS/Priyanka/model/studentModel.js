const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  username: String,
  password: String,
  email: String,
});

const Student = mongoose.model("student", studentSchema);

module.exports = Student;
