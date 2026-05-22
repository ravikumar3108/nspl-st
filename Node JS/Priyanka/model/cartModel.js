const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  item: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "student" },
  quantity: {
    type: Number,
    default: 1,
  },
});

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;
