const express = require("express");
const Product = require("../model/productModel");

const createProduct = async (req, res) => {
  const { title, description, category, price, discount, quantity } = req.body;

  const createPr = new Product({
    title: req.body.title,
    description: description,
    category: category,
    price: price,
    quantity: quantity,
    discount: discount,
  });

  const saveProduct = await createPr.save();
  res.json({ message: "succes create a product", data: saveProduct });
};

const delProduct = async (req, res) => {
  const id = req.params.id;
  console.log(id);

  const delelteProduct = await Product.deleteOne({ _id: id });
  console.log(delelteProduct);
};
const getAllProduct = async (req, res) => {
  const getproducts = await Product.find({});
  res.json({ message: "fetch all products", data: getproducts });
};

module.exports = { createProduct, delProduct, getAllProduct };
