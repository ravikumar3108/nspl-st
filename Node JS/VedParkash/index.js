const express = require('express')
const app = express()


app.use(express.json())

app.post("/user/login", async (req, res) => {
    console.log("get APi")
    console.log(req.body)
    res.json({
        message: "ddsffs",
        success: true
    })

    // .save() == signup 
    // findone() == login 

})
app.post("/product/createProduct", async (req, res) => {
    console.log("get APi")
    console.log(req.body)
    res.json({
        message: "ddsffs",
        success: true
    })

    // .save() == signup 
    // findone() == login 

})

app.get("", (req, res) => {
    res.json({ messgae: "success" })
})

app.listen(8080, () => {
    console.log("server is running")
})




