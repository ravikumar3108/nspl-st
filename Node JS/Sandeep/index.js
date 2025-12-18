const express = require("express");

// Create a object
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();

// Middlewares:-
app.use(express.json());

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
  console.log("Databse Connect");
}

// Get , Post , Put , Delete
// To test Apis :- Thunder Client

// Crate a schema

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// create a model
const UserModel = mongoose.model("users", userSchema);

app.get("/api/getusers", (req, res) => {
  // res.send("Message send")
  res.json({
    message: "get api Craete success.",
    name: "Sandeep",
  });
});

app.post("", async (req, res) => {
  console.log(req.body);
  const { name, email, password } = req.body;

  const createUser = new UserModel({
    name: name,
    email: email,
    password: password,
  });

  const saveUser = await createUser.save();

  res.json({
    message: "Post Request",
    user: saveUser,
  });
});

app.listen(8000, () => {
  console.log("Server Create Successfull");
});


