const express = require("express");
const router = express.Router();
const { protectRoute } = require("../protectRoute.js/protectRoutes");
const {
  CreateProduct,
  AllProduct,
  AddToCart,
  GetAllCartData,
  deleteCartItem,
  AddQuantity,
} = require("../controllers/productControllers");

router.post("/createProduct", CreateProduct);
router.get("/allproduct", AllProduct);
router.post("/cart/:id", AddToCart);
router.get("/getCarts", protectRoute, GetAllCartData);
router.delete("/deleteCartProduct/:id", deleteCartItem);
router.post("/addQuantity/:id", AddQuantity);

module.exports = router;
