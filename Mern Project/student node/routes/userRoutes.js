const express = require("express");
const router = express.Router();
const {
  SignupUser,
  loginuser,
  userProfile,
} = require("../controllers/userControllers");

router.post("/signup", SignupUser);
router.post("/login", loginuser);
router.post("/profile", userProfile);

module.exports = router;
