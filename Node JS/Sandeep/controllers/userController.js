const express = require("express");
const UserModel = require("../models/userModel");

const Signup = async (req, res) => {
  console.log(req.body);
  try {
    const { firstname, lastname, email } = req.body;

    const createUser = new UserModel({
      name: firstname,
      email: email,
      lastname: lastname,
    });

    const saveUser = await createUser.save();

    if (saveUser) {
      res.json({
        message: "Succesfull Create",
        // user: saveUser,
        status: true,
      });
    } else {
      res.json({
        message: "Something Wrong",
        // user: saveUser,
        status: false,
      });
    }
  } catch (error) {
    res.json({ error: `Error in Signup ${error}` });
  }
};

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

module.exports = { Signup, LoginUser, DeleteUser, AllUsers };
