const express = require('express')
const app = express()
const usersRoutes = require("./routes/UserRoutes")

const mongoose = require('mongoose');

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

}

const userSchema = new mongoose.Schema({
  name: String,
  email:String,
  password:String
});


const users = mongoose.model('Userdata', userSchema);



// Middlewares 
app.use(express.json())
app.use(require("./routes/UserRoutes"))


app.get("/users", (req, res) => {
    res.json("Helooo Ravi kumar")
})



app.listen(8000, () => {
    console.log("Server is running")
})

