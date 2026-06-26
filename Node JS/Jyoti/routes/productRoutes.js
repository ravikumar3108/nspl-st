const express = require("express");
const router = express.Router();
const {
  CreateProduct,
  getProducts,
  singleProduct,
  getCategoryData
} = require("../controllers/productControllers");

router.post("/createProduct", CreateProduct);
router.get("/getAllProducts", getProducts);
router.get("/singleProduct/:id", singleProduct);
router.get("/getCategoryData/:category", getCategoryData);

module.exports = router;
