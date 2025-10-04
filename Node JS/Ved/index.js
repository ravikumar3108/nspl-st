const express = require('express')
const mongoose = require("mongoose")
const userRoutes = require("./routes/user")
const productRoutes = require("./routes/product")
const cartRoutes = require("./routes/CartRoutes")
const multer = require('multer')
// create a object 
const app = express()

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // Specify the destination folder
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname); // Generate a unique filename
    }
});

const upload = multer({ storage: storage })




const cors = require('cors')

const corsOptions = {
    origin: 'http://example.com',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

// Middlewares:- 
app.use(express.json())
app.use("/users", userRoutes)
app.use("/product", upload.single("image"), productRoutes)
app.use("/productCart", cartRoutes)
// TO get image globallly 
app.use("/uploads", express.static("uploads"))
// app.use(cors())


// Connectivity of cloud mongodb to node js 
main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb+srv://raviluhaniwal318:ZElVoJDwr5XJvdMz@cluster0.us8usk1.mongodb.net/vedparkash?retryWrites=true&w=majority&appName=Cluster0').then(() => {
        console.log("database connect")
    });

    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

app.get("", (req, res) => {
    res.json("messade")
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










