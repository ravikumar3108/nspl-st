const mongoose = require('mongoose')

const cartSchema = new mongoose.Schema({

    item: {
        type: mongoose.Types.ObjectId, ref: "products"
    },
    quantity: {
        type: Number,
        default: 1,
    }

});


const Cart = mongoose.model('cart', cartSchema);
module.exports = Cart