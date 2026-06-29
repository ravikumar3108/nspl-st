const express = require("express");
const {
  createProduct,
  getAllProducts,
} = require("../controllers/productControllers");

const router = express.Router();

router.post("/", createProduct);

router.get("/", getAllProducts);

// router.get("/:id", getSingleProduct);

// router.put("/:id", upload.array("images", 10), updateProduct);

// router.delete("/:id", deleteProduct);

module.exports = router;
