const mongoose = require("mongoose");
// student register form schema
const studentSchema = new mongoose.Schema({
  firstname: {
    type: String,
    // unique: true,
    // trim: true,
  },
  email: {
    type: String,
  },
  lastname: {
    type: String,
  },
  fathername: {
    type: String,
  },
  image: {
    data: Buffer,
    ContentType: String,
  },
  mobileno: String,
  address: String,
  duration: String,
  batch: String,
});

const StudentReg = mongoose.model("student", studentSchema);

module.exports = StudentReg;
