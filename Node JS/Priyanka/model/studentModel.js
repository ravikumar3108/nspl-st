const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  email: String,
});

const Student = mongoose.model("student", studentSchema);

module.exports = Student;
