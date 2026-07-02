const Cart = require("../models/cartModel");

const addToCart = async (req, res) => {
  console.log(req.params);

  const addProduct = new Cart({
    item: req.params.id,
  });

  const savecart = await addProduct.save();
  res.json({ message: "Sucess", data: savecart });
};

const getCartData = async (req, res) => {
  try {
    const getCart = await Cart.find({}).populate("item");
    res.json({ message: "Cart Data", staus: true, data: getCart });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { addToCart, getCartData };
