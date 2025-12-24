const express = require("express");

// Create a object
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();

// Middlewares:-
app.use(express.json());
app.use("/user", require("./routes/userRoutes"));

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(process.env.MONGO_URL);
  console.log("Databse Connect");
}

// Get , Post , Put , Delete
// To test Apis :- Thunder Client

// Crate a schema

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
