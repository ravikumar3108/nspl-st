const express = require('express')
const router = express.Router()
const { userLogin , userSignup} = require("../controllers/userControllers")

router.get("/userlogin", userLogin)
router.post("/userSignup", userSignup)



module.exports = router



