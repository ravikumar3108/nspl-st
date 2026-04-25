const express = require("express");
const router = express.Router();
const {
  signupStudent,
  loginStudent,
} = require("../controllers/studentController");

router.post("/signup", signupStudent);
router.post("/login", loginStudent);

module.exports = router;
