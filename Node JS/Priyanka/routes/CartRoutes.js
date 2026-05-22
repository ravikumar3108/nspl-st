const express = require("express");
const router = express.Router();
const { AddtoCart , getCarts } = require("../controllers/CartControllers");

router.post("/addtocart/:id", AddtoCart);
router.post("/getCarts", getCarts);

module.exports = router;
