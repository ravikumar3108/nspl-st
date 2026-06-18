const User = require("../models/userModel");

const login = async (req, res) => {
  console.log(req.body);

  try {
    const { name, email, password } = req.body;

    const existUser = await User.findOne({ email: email });
    if (existUser) {
      res.json({ message: "User Already", status: true });
    }

    const createUser = new User({
      name: name,
      email: email,
      password: password,
    });

    const saveUser = await createUser.save();
    res.json({ message: "Save Success", data: saveUser, status: true });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { login };
