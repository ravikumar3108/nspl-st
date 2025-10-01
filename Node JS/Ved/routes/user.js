const express = require('express')
const router = express.Router()
const { loginUser, createUser } = require("../controllers/userController")


router.post("/getUsers", loginUser)
router.post("/createUser", createUser)

module.exports = router

