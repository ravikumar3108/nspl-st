const express = require("express");
const { addToCart } = require("../controllers/cartControllers");

const router = express.Router();

router.post("/addtocart/:id", addToCart);

module.exports = router;
