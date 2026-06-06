const express = require("express");
const router = express.Router();
const { signup, login, profile } = require("../controllers/userControllers");

router.post("/signup", signup);
router.post("/login", login);
router.post("/profile", profile);

module.exports = router;


