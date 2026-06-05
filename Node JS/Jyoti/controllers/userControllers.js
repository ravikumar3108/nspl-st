const signup = async (req, res) => {
  console.log(req.body);
  res.json({ status: true, message: "Signup Api", data: req.body });
};


module.exports = { signup };
