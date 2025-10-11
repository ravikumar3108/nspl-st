const Cart = require("../models/CartModel")


const AddToCart = async (req, res) => {


    const cartsItem = new Cart({
        item: req.params.id,

    })

    const saveCart = await cartsItem.save()

    res.json({
        message: saveCart
    })

}

const GetCartData = async (req, res) => {

    const getDAta = await Cart.find({}).populate("item")
    res.json({
        message: getDAta
    })

}




module.exports = { AddToCart, GetCartData }