const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  item: {
    type: mongoose.Schema.Types.ObjectId, // Explicitly declare the type as ObjectId
    ref: "Product",
  },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
  quantity: {
    type: Number,
    default: 1,
  },
});

// create a model
const Cart = mongoose.model("Cart", cartSchema);
module.exports = Cart;
