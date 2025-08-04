const express = require('express')


const userLogin = (req, res) => {
    console.log(req.body)
    res.json({ Message: "MVC Pattern" })
}

module.exports = { userLogin }


