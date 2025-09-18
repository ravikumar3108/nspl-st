
const mongoose = require('mongoose')


const cartSchema = new mongoose.Schema({
    item: {
        type: mongoose.Types.ObjectId, ref: "product"
    },
    quantity: {
        default: 1,
        type: Number
    }
});

// Model :-  collection Name (user)

const Cart = mongoose.model('cart', cartSchema);
module.exports = Cart