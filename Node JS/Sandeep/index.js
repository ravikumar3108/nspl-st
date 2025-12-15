const express = require("express");

// Create a object
const app = express();

// Get , Post , Put , Delete
app.get("/api/getusers", (req, res) => {
  // res.send("Message send")
  res.json({
    message: "get api Craete success.",
    name: "Sandeep",
  });
});

app.listen(8000, () => {
  console.log("Server Create Successfull");
});
