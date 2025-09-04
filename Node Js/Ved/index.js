const express = require('express')

// create a object 
const app = express()

// Middlewares:- 
app.use(express.json())



// Api's GET , POST , PUT , DELETE
// Create a GET Api
app.get("/", (req, res) => {
    res.json({
        message: "Heloo Ved"
    })
})

app.get("/getUsers", (req, res) => {
    res.json({
        message: "User Api"
    })
})

app.post("/createUsers", (req, res) => {
    console.log(req.body)
    // Error Handling :- 
    try {
        res.json({
            message: "Post Api",
            data: req.body
        })

    } catch (error) {
        console.log("create user", error)
        res.json({ error: error })
    }
})




// Create a  localhost :- 8000 
// PORT No- 8000
// Callback Function :- A callback function in JavaScript is a function passed as an argument to another 
// function, intended to be executed after the outer function completes
app.listen(8000, () => {
    console.log("Server is started")
})





