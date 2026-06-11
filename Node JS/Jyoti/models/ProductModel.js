const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: String,
  category: String
});

const Product = mongoose.model("product", productSchema);

module.exports = Product;
