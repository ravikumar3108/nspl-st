const express = require("express")
const app = express()
const mongoose = require('mongoose');
const cors = require('cors')

 
const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

main().catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb+srv://raviluhaniwal318:ZElVoJDwr5XJvdMz@cluster0.us8usk1.mongodb.net/hriday');
    console.log("Databse is connect")
}



// middleware
app.use(express.json())
app.use(cors(corsOptions))
app.use(require("./routes/userRoutes"))

// Apis create 
// app.get("", (req, res) => {
//     res.json({
//         id: 1,
//         name: "ravi",
//         age: 23
//     })
// })

// app.post("/users", (req, res) => {
//     console.log(req.body)
//     res.json("Succesfulll")
// })



app.listen(8080, () => {
    console.log("Server is running")
})



