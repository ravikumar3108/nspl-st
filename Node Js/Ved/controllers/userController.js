const express = require('express')
const User = require("../models/userModel")

const getUsers = async (req, res) => {
    res.json({
        meeage: "Doneeee"
    })
}
const loginUsers = async (req, res) => {
    res.json({
        meeage: "Doneeee"
    })
}


module.exports = { getUsers, loginUsers }