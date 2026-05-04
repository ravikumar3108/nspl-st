const express = require("express");
const User = require("../models/UserModel");

const SignupUser = async (req, res) => {
  // Step:1 :- Check the data. (req.body)
  // console.log(req.body);

  try {
    // this data belongs to frontend
    const { email, username, name, password } = req.body;

    const createuser = new User({
      // left side :- schema name
      // right side :- body name
      email: email,
      username: username,
      name: name,
      password: password,
    });

    // save the data
    const saveuser = await createuser.save();

    if (saveuser) {
      res
        .status(200)
        .json({ message: "Success", status: true, user: saveuser });
    } else {
      res.status(500).json({ message: "error", status: false });
    }
  } catch (error) {
    res.json({ error: error, message: "Error in Signup" });
  }
};

const loginuser = async (req, res) => {
  console.log(req.body);
  try {
    const { email, password } = req.body;

    const existUser = await User.findOne({ email: email });
    console.log(existUser);

    if (!existUser) {
      res.status(200).json({ message: "failed", status: false });
    }

    if (existUser.password !== password) {
      res.status(200).json({ message: "password incorrect", status: false });
    }

    res.status(200).json({ message: "Success", status: true, user: existUser });
  } catch (error) {
    res.json({ error: error, message: "Error in login" });
  }
};

const userProfile = async (req, res) => {
  console.log(req.body);
  try {
    const updateUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json({ message: "Success", user: updateUser });
  } catch (error) {
    res.json({ error: error, message: "Error in profile" });
  }
};

module.exports = { SignupUser, loginuser ,userProfile };
