const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  item: {
    type: new mongoose.Types.ObjectId, // Explicitly declare the type as ObjectId
    ref: "Product",
  },
});

// create a model
const Cart = mongoose.model("Cart", cartSchema);
module.exports = Cart;
