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


module.exports = { createproduct }