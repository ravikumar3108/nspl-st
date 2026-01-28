const express = require("express");
const router = express.Router();
const {
  CreateProduct,
  AllProduct,
  AddToCart,
  GetAllCartData,
  deleteCartItem,
} = require("../controllers/productControllers");

router.post("/createProduct", CreateProduct);
router.get("/allproduct", AllProduct);
router.post("/cart/:id", AddToCart);
router.get("/getCarts", GetAllCartData);
router.delete("/deleteCartProduct/:id", deleteCartItem);

module.exports = router;
