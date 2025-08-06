const express = require('express')
const User = require("../models/userModel")

const userLogin = async (req, res) => {
    const alldata = await User.find({})
    res.json({ message: alldata, status: true })
}


const userSignup = async (req, res) => {
    console.log(req.body)
    const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    });

    const saveuser = await newUser.save()
    console.log(saveuser)

}

module.exports = { userLogin, userSignup }


