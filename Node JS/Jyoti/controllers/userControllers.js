const userModel = require("../models/userModel");

const signup = async (req, res) => {
  console.log(req.body);

  try {
    const { username, email, password, firstname, lastname, gender } = req.body;

    const checkEmail = await userModel.findOne({ email: email });

    if (checkEmail) {
      res.json({ message: "Email Already Register", status: true });
    }

    const createUser = new userModel({
      username: username,
      email: email,
      password: password,
      gender: gender,
      firstname: firstname,
      lastname: lastname,
    });

    const saveUser = await createUser.save();
    res.json({ message: "Signup Success", status: true, data: saveUser });
  } catch (err) {
    console.log(err);
  }
};

const login = async (req, res) => {
  // console.log(req.body);

  const { email, password } = req.body;

  try {
    const existUser = await userModel.findOne({ email: email });

    if (!existUser) {
      res.json({ message: "User not Found", status: false });
    }
    console.log(existUser.password);
    if (existUser.password != password) {
      res.json({
        message: "Password incoorect",
        status: false,
      });
    }

    res.json({ message: "Login Success", status: true, data: existUser });
  } catch (error) {
    console.log(error);
  }
};

const profile = async (req, res) => {
  console.log(req.body);
  res.json({ status: true, message: "Signup Api", data: req.body });
};

module.exports = { signup, login, profile };
