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

  res.json({ status: true, message: "Signup Api", data: req.body });
};

const login = async (req, res) => {
  console.log(req.body);
  res.json({ status: true, message: "Signup Api", data: req.body });
};

const profile = async (req, res) => {
  console.log(req.body);
  res.json({ status: true, message: "Signup Api", data: req.body });
};

module.exports = { signup, login, profile };
