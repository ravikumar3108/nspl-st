const express = require('express')
const mongoose = require("mongoose")

// create a object 
const app = express()

// Middlewares:- 
app.use(express.json())


// Connectivity of cloud mongodb to node js 
main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb+srv://raviluhaniwal318:ZElVoJDwr5XJvdMz@cluster0.us8usk1.mongodb.net/vedparkash?retryWrites=true&w=majority&appName=Cluster0').then(() => {
        console.log("database connect")
    });

    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}


const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
});

// Model :-  collection Name (user)

const User = mongoose.model('user', userSchema);


// Api's GET , POST , PUT , DELETE
// Create a GET Api
app.get("/", (req, res) => {
    res.json({
        message: "Heloo Ved"
    })
})

app.post("/getUsers", async (req, res) => {

    try {
        console.log(req.body)
        const email = req.body.email
        const getusers = await User.findOne({ email: email })
        console.log(getusers)
        res.json({
            data: getusers
        })

    } catch (error) {

    }

})

app.post("/createUsers", async (req, res) => {
    console.log(req.body)
    // Error Handling :- 
    try {

        const newUser = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        })

        const saveuser = await newUser.save()
        res.json({
            data: saveuser
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


// mongodb :-
// Collections
// Json Objects
// Nosql and sql
// libarary :- mongoose (connect  mongodb to nodejs )

// Conectivity
// MVC :- Model view Controler
// Schema
// Models
// Asynchronus
// schema type
// Queries
// middlewares 










