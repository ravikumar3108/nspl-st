const Cart = require("../models/cartModel");

const addToCart = async (req, res) => {
  console.log(req.params);

  const addProduct = new Cart({
    item: req.params.id,
  });

  const savecart = await addProduct.save();
  res.json({ message: "Sucess", data: savecart });
};

module.exports = { addToCart };
