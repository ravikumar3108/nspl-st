

const mongoose = require('mongoose')


const productSchem = new mongoose.Schema({
    title: String,
    description: String,
    category: String,
    price: String,
    image: String
});

// Model :-  collection Name (user)

const Product = mongoose.model('product', productSchem);
module.exports = Product