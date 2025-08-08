const express = require('express')
const router = express.Router()
const { userLogin ,getUser} = require("../controllers/UserControllers")

router.post("/userLogin", userLogin)
router.get("/getUser", getUser)

module.exports = router