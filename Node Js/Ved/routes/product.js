const express = require('express')

const router = express.Router()
const { createProduct ,singleProduct } = require("../controllers/productControllers")

router.post("/createProducts", createProduct)
router.get("/singleProduct/:id", singleProduct)


module.exports = router


