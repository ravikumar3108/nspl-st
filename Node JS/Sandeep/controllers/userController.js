const express = require("express");
const UserModel = require("../models/userModel");

const loginUser = async (req, res) => {
  console.log(req.body);
  const { name, email, password } = req.body;

  const createUser = new UserModel({
    name: name,
    email: email,
    password: password,
  });

  const saveUser = await createUser.save();

  res.json({
    message: "Post Request",
    user: saveUser,
  });
};

module.exports = { loginUser };
