const express = require("express");
const Student = require("../model/studentModel");

const signupStudent = async (req, res) => {
  try {
    const { firstname, lastname, email, fathername, mobilno, address } =
      req.body;

    const existStudent = await Student.findOne({ email: email });
    // console.log(existStudent);

    if (!existStudent) {
      const createStudent = new Student({
        firstname: firstname,
        lastname: lastname,
        email: email,
      });

      const saveUser = await createStudent.save();
      if (saveUser) {
        res.json({ message: "Success", data: saveUser, status: true });
      } else {
        res.json({ message: "failed", status: false });
      }
    }

    res.json({
      message: "Student Already register with this mail",
      status: false,
    });
  } catch (error) {
    res.json({ message: "Error in Signup", error: error });
  }
};

const loginStudent = async (req, res) => {
  try {
    console.log(req.body);
    const { email, password } = req.body;

    const existuser = await Student.findOne({ email: email });
    if (existuser) {
      res.json({ message: "Success", data: existuser, status: true });
    } else {
      res.json({ message: "failed", status: false });
    }
  } catch (error) {
    console.log(error);
    res.json({ message: "Error in login", error: error });
  }
};

module.exports = { signupStudent, loginStudent };
