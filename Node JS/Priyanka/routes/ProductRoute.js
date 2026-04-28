const express = require("express");
const router = express.Router();

const {
  createProduct,
  delProduct,
  getAllProduct,
  updateProduct,
} = require("../controllers/productController");

router.post("/", createProduct);
router.get("/", getAllProduct);
router.delete("/deleteProduct/:id", delProduct);
router.post("/updateProduct/:id", updateProduct);

module.exports = router;
