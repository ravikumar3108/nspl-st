const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: String,
  discount: String,
  quantity: String,
  category: String,
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
