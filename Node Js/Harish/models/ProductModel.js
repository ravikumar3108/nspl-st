const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    title: String,
    category: String,
    image: {

    },

});


const Product = mongoose.model('products', ProductSchema);
module.exports = Product