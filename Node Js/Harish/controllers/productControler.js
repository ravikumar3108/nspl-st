const Cart = require("../models/cartModel")
const Product = require("../models/ProductModel")
const fs = require("fs")


const createproduct = async (req, res) => {
    console.log(req.body)
    console.log(req.file)
    const newProduct = new Product({
        title: req.body.title,
        category: req.body.category,
        image: { data: fs.readFileSync("uploads/" + req.file.filename), contentType: "uploads/" }
    })

    const saveuser = await newProduct.save()
}
const updateProduct = async (req, res) => {
    console.log(req.body)
    console.log(req.params.id)

    const updateProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.json({
        message: true,
        product: updateProduct
    })

}


const AddToCart = async (req, res) => {
    const cartID = req.params.id
    const saveCart = new Cart({
        item: cartID
    })

    const saveProduct = saveCart.save()
}


const getCartItems = async (req, res) => {
    console.log("Fjundnd")

    const getAllData = await Cart.find({}).populate("item")
    res.json({
        data:getAllData
    })

}





module.exports = { createproduct, updateProduct, AddToCart, getCartItems }