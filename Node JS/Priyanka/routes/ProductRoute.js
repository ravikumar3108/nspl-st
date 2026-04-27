const express = require("express");
const router = express.Router();

const {
  createProduct,
  delProduct,
  getAllProduct
} = require("../controllers/productController");

router.post("/", createProduct);
router.get("/", getAllProduct);
router.delete("/deleteProduct/:id", delProduct);

module.exports = router;
