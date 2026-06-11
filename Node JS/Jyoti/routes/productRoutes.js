const express = require("express");
const router = express.Router();
const {
  CreateProduct,
  getProducts,
} = require("../controllers/productControllers");

router.post("/createProduct", CreateProduct);
router.get("/getAllProducts", getProducts);

module.exports = router;
