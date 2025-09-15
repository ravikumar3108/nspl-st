
const express = require('express')
const router = express.Router()
const { createproduct, updateProduct, AddToCart, getCartItems } = require("../controllers/productControler")

router.post("/createproduct", createproduct)
router.post("/updateProduct/:id", updateProduct)
router.post("/addtocart/:id", AddToCart)
router.get("/getCarts", getCartItems)

module.exports = router