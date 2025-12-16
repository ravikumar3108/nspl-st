const express = require("express");

// Create a object
const app = express();


// Middlewares:- 
app.use(express.json())


// Get , Post , Put , Delete
// To test Apis :- Thunder Client
app.get("/api/getusers", (req, res) => {
  // res.send("Message send")
  res.json({
    message: "get api Craete success.",
    name: "Sandeep",
  });
});

app.post("", (req, res) => {
  console.log(req.body);
  res.json({
    message: "Post Request",
  });
});

app.listen(8000, () => {
  console.log("Server Create Successfull");
});
