const express = require("express")
const app = express()

// middleware
app.use(express.json())


// Apis create 
app.get("", (req, res) => {
    res.json({
        id: 1,
        name: "ravi",
        age: 23
    })
})

app.post("/users", (req, res) => {
    console.log(req.body)
    res.json("Succesfulll")
})



app.listen(8080, () => {
    console.log("Server is running")
})



