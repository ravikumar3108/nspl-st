const express = require("express");
const Student = require("../model/studentModel");

const signupStudent = async (req, res) => {
  console.log(req.body);
  try {
    const { username, email, password } = req.body;

    const existStudent = await Student.findOne({ email: email });

    if (!existStudent) {
      const createStudent = new Student({
        username: username,
        password: password,
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
    if (!existuser) {
      res.json({ message: "User is not found", status: false });
    }
    if (existuser.password != password) {
      res.json({ message: "Password is not match", status: false });
    }
    res.json({ message: "Login Success", data: existuser, status: true });
    
  } catch (error) {
    console.log(error);
    res.json({ message: "Error in login", error: error });
  }
};

module.exports = { signupStudent, loginStudent };
