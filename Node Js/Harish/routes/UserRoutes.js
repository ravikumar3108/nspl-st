const express = require('express')
const router = express.Router()
const { userLogin, getUser, deleteuser } = require("../controllers/UserControllers")

router.post("/userLogin", userLogin)
router.get("/getUser", getUser)
router.post("/deleteUser/:id", deleteuser)

module.exports = router