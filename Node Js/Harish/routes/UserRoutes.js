const express = require('express')
const router = express.Router()
const { userLogin } = require("../controllers/UserControllers")

router.post("/userLogin", userLogin)

module.exports = router