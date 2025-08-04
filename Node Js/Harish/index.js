const express = require('express')
const app = express()
const usersRoutes = require("./routes/UserRoutes")


// Middlewares 
app.use(express.json())
app.use(require("./routes/UserRoutes"))


app.get("/users", (req, res) => {
    res.json("Helooo Ravi kumar")
})



app.listen(8000, () => {
    console.log("Server is running")
})

