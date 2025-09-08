const express = require('express')
const router = express.Router()
const { getUsers, loginUsers } = require("../controllers/userController")


router.get("/getUsers", getUsers)

module.exports = router

