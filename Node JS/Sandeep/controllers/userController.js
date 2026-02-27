const express = require("express");
const UserModel = require("../models/userModel");
const jwt = require("jsonwebtoken");

// changes in login and signup 


const Signup = async (req, res, next) => {
  try {
    const { firstname, lastname, email, password } = req.body;

    // Check if user already exists
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        status: false,
        message: "User already exists",
      });
    }

    // Create new user
    const createUser = new UserModel({
      name: firstname,
      lastname: lastname,
      email: email,
      password: password, // hash karna better hoga
    });

    await createUser.save();

    // Create JWT token
    const token = jwt.sign({ userId: createUser._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.status(201).json({
      status: true,
      message: "User Created Successfully",
      user: createUser,
      token: token,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = Signup;

const LoginUser = async (req, res) => {
  // Error handling
  console.log(req.body);
  try {
    const { email } = req.body;

    // const existuser = await UserModel.find({}); // all data
    // const existuser = await UserModel.find({ name: name });  // Specific Data
    const existuser = await UserModel.findOne({ email: email });

    if (!existuser) {
      res.json({ message: "user not found", status: false });
    } else {
      let token = jwt.sign({ userId: existuser._id }, process.env.JWT_SECRET, {
        expiresIn: "7d",
      });
      res.json({
        token: token,
        status: true,
        user: existuser,
        message: "Login successfully !!",
      });
    }
  } catch (error) {
    console.log("Error in login", error);
  }

  if (!user || user.password != password) {
    res.json({
      status: false,
      message: "Wrong details please check at once",
    });
  }
};

// delete User

const DeleteUser = async (req, res) => {
  console.log(req.body);
  console.log(req.params);

  const { id } = req.params;

  const deleteUserData = await UserModel.deleteOne({ _id: id });
  console.log(deleteUserData);
};

// getApi

const AllUsers = async (req, res) => {
  const allData = await UserModel.find({});
  res.json({
    user: allData,
  });
};

module.exports = { Signup, LoginUser, DeleteUser, AllUsers };
