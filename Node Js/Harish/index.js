const express = require('express')
const app = express()
const usersRoutes = require("./routes/UserRoutes")

const mongoose = require('mongoose');

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://raviluhaniwal318:ZElVoJDwr5XJvdMz@cluster0.us8usk1.mongodb.net/Harish');
  console.log("Database is Connected")
}


// Middlewares 
app.use(express.json())
app.use(require("./routes/UserRoutes"))


app.get("/users", (req, res) => {
    res.json("Helooo Ravi kumar")
})



app.listen(8000, () => {
    console.log("Server is running")
})

