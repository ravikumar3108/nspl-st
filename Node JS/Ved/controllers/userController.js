const express = require('express')
const User = require("../models/userModel")

const loginUser = async (req, res) => {
    try {

        let existuser = await User.findOne({ email: req.body.email })
        res.status(200).json({
            status: true,
            data: existuser,
        })

    } catch (error) {
        console.log(error)
    }
}


const createUser = async (req, res) => {
    // Error Handling :- 
    try {
        console.log(req.body.email)
        let existUser = await User.findOne({ email: req.body.email })
        console.log(existUser)
        if (!existUser) {
            console.log("xist")
            const newUser = new User({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
            })

            const saveuser = await newUser.save()
            res.json({
                data: saveuser,
                message: "Succesfull"
            })
        } else {
            console.log("defaaa")
            res.json({ meesage: "Email already used...." })
        }
    } catch (error) {
        console.log("create user", error)
        res.json({ error: error })
    }
}


module.exports = { loginUser, createUser }