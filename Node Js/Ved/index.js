const express = require('express')

// create a object 
const app = express()

// Api's GET , POST , PUT , DELETE

// Create a GET Api
app.get("/", (req, res) => {
    res.json({
        message:"Heloo Ved"
    })
})




// Create a  localhost :- 8000 
// PORT No- 8000
// Callback Function :- A callback function in JavaScript is a function passed as an argument to another 
// function, intended to be executed after the outer function completes
app.listen(8000, () => {
    console.log("Server is started")
})





