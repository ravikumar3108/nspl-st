const Product = require("../models/productModel");

const createProduct = async (req, res) => {
  // console.log(req.body)
  try {
    const { name, price, oldPrice, rating, reviews, stock, description } =
      req.body;

    const imagePaths = req.files.map((file) => file.filename);

    const product = await Product.create({
      name,
      price,
      oldPrice,
      rating,
      reviews,
      stock,
      description,
      images: imagePaths,
    });

    res.status(201).json({
      success: true,
      message: "Product created successfully",
      product,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = { createProduct };
