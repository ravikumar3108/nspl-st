const express = require("express");
const UserModel = require("../models/userModel");

const Signup = async (req, res) => {
  console.log(req.body);
  // const { name, email, password } = req.body;

  // const createUser = new UserModel({
  //   name: name,
  //   email: email,
  //   password: password,
  // });

  // const saveUser = await createUser.save();

  res.json({
    message: "Post Request",
    // user: saveUser,
  });
};

const LoginUser = async (req, res) => {
  // Error handling
  try {
    const { email, name } = req.body;

    // const existuser = await UserModel.find({}); // all data
    // const existuser = await UserModel.find({ name: name });  // Specific Data
    const existuser = await UserModel.findOne({ email: email });

    if (!existuser) {
      res.json({ message: "user not found", status: false });
    }
    res.json({
      Alluser: existuser,
      status: true,
    });
  } catch (error) {
    console.log("Error in login", error);
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

module.exports = { Signup, LoginUser, DeleteUser ,AllUsers};
