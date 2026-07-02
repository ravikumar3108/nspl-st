const express = require("express");
const { addToCart ,getCartData } = require("../controllers/cartControllers");

const router = express.Router();

router.post("/addtocart/:id", addToCart);
router.get("/getCartData", getCartData);

module.exports = router;
