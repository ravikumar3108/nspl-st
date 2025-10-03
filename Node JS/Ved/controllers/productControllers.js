const express = require('express')
const Product = require('../models/productModel')
// const Product = require("../models/productModel")


const createProduct = async (req, res) => {
    // console.log(req.body)
    console.log(req.file)
    res.json({
        message: "ture"
    })
    try {
        const newProduct = new Product({
            title: req.body.title,
            description: req.body.description,
            category: req.body.category,
            price: req.body.price,
            image: req.file.filename
        })

        const saveproduct = await newProduct.save()

        if (!saveproduct) {
            res.json({
                message: false,
                data: saveproduct
            })
        } else {
            res.json({
                message: true,
                data: saveproduct
            })
        }

    } catch (error) {
        console.log(error)
    }

}

const getAllProducts = async (req, res) => {

    try {

        const allProduct = await Product.find({})
        res.json({
            message: true,
            data: allProduct
        })

    } catch (error) {
        res.json(error)
    }
}

// Single Products 

const singleProduct = async (req, res) => {

    console.log(req.params)

    try {

        const id = req.params.id
        const getData = await Product.findOne({ _id: id })

    } catch (error) {
        res.json(error)
    }
}


const updateProduct = async (req, res) => {

    console.log(req.params)

    try {

        const updateproduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.json({
            message: true,
            data: updateproduct
        })

    } catch (error) {
        res.json(error)
    }
}




module.exports = { createProduct, singleProduct, updateProduct, getAllProducts }