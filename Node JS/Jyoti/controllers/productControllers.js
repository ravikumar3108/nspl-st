const Product = require("../models/ProductModel");

const CreateProduct = async (req, res) => {
  console.log(req.body);

  const { title, description, price, category } = req.body;

  const newProduct = Product({
    title: title,
    description: description,
    price: price,
    category: category,
  });

  const saveProduct = await newProduct.save();

  if (!saveProduct) {
    res.json({ message: "Product Not Create", status: false });
  }
  res.json({ message: "successfull Create", status: true, data: saveProduct });
};

const getProducts = async (req, res) => {};

module.exports = { CreateProduct, getProducts };
