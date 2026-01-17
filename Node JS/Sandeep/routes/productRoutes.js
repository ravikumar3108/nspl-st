const express = require("express");
const router = express.Router();
const {
  CreateProduct,
  AllProduct,
  AddToCart,
  GetAllCartData,
} = require("../controllers/productControllers");

router.post("/createProduct", CreateProduct);
router.get("/allproduct", AllProduct);
router.post("/cart/:id", AddToCart);
router.get("/getCarts", GetAllCartData);

module.exports = router;
