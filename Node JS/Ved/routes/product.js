const express = require('express')

const router = express.Router()
const { createProduct, singleProduct, updateProduct, getAllProducts } = require("../controllers/productControllers")

router.post("/createProducts", createProduct)
router.get("/allProducts", getAllProducts)
router.get("/singleProduct/:id", singleProduct)
router.post("/updateProduct/:id", updateProduct)


module.exports = router;


