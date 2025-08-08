const express = require('express')
const User = require("../models/UserModel")

const userLogin = async (req, res) => {
    console.log(req.body)
    const newuser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    })

    const saveuser = await newuser.save()
    res.json({ message: saveuser })
}

const getUser = async (req, res) => {
    console.log(req.body)
    // const alldata = await User.find({})
    const alldata = await User.findOne({name: "Harish",})
    res.json({ message: alldata })

}

module.exports = { userLogin, getUser }


