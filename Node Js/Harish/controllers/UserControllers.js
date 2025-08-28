const express = require('express')
const User = require("../models/UserModel")

const userLogin = async (req, res) => {
    try {
        const newuser = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        })

        const saveuser = await newuser.save()

        if (saveuser) {
            res.json({ message: saveuser, status: true })
        } else {
            res.json({ message: saveuser, status: false })
        }

    } catch (error) {
        console.log(error)
    }
}

const getUser = async (req, res) => {
    console.log(req.body)
    
    const alldata = await User.findOne({email : req.body.email})
    res.json({ message: alldata })
}

module.exports = { userLogin, getUser }


