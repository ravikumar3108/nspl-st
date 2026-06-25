const express = require("express");
const router = express.Router();
const {
  CreateProduct,
  getProducts,
  singleProduct,
} = require("../controllers/productControllers");

router.post("/createProduct", CreateProduct);
router.get("/getAllProducts", getProducts);
router.get("/singleProduct/:id", singleProduct);

module.exports = router;
