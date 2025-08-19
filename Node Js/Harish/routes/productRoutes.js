
const express = require('express')
const router = express.Router()
const { createproduct } = require("../controllers/productControler")

router.post("/product", createproduct)

module.exports = router