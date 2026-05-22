const Cart = require("../model/cartModel");

const AddtoCart = async (req, res) => {
  console.log(req.params.id);
  const id = req.params.id;

  const saveCart = new Cart({
    item: id,
  });

  const createCart = await saveCart.save();
  console.log(createCart);
};

const getCarts = async (req, res) => {
  const getCartsProducts = await Cart.find({}).populate("item");
  console.log(getCartsProducts)
};

module.exports = { AddtoCart, getCarts };
