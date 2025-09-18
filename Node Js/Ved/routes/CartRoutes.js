const express = require('express')

const router = express.Router()
const { AddToCart, GetCartData } = require("../controllers/cartControllers")

router.post("/addtocart/:id", AddToCart)
router.get("/getCart", GetCartData)



module.exports = router;


