const express = require("express");

const router = express.Router();
const { login } = require("../controllers/userControllers");

router.post("/login", login);
router.post("/signup", login);

module.exports = router