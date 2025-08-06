const express = require('express')
const User = require("../models/userModel")

const userLogin = (req, res) => {
    // res.json("Message fdfsdfdsds")
    // const newUser = new User({ name: 'Silence', email: "ravi@gamil.com" });
    // console.log(newUser)
}
const userSignup = async (req, res) => {
    console.log(req.body.name)
    const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    });

    const saveuser = await newUser.save()
    console.log(saveuser)
    // res.json("Message fdfsdfdsds")

}

module.exports = { userLogin, userSignup }


