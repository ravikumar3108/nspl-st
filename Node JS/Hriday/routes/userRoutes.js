const express = require("express");

const router = express.Router();
const { signup } = require("../controllers/userControllers");

router.post("/signup", signup);

module.exports = router