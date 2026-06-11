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

const deleteUser = async (req, res) => {
  const id = req.params.id;

  const delUser = await userModel.deleteOne({ _id: id });
  console.log(delUser);
};

const profile = async (req, res) => {
  console.log(req.body);
  res.json({ status: true, message: "Signup Api", data: req.body });
};

const updateUser = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  console.log(req.body);

  const updateUser = await userModel.findByIdAndUpdate(id, req.body, {
    new: true,
  });

  if (!updateUser) {
    res.json({ message: "something Went Wrong", staus: false });
  }

  res.json({ message: "Update Succesfull", staus: true, data: updateUser });
};

module.exports = { signup, login, profile, deleteUser, updateUser };
