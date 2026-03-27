// ES6 : Ecmascipt 6 : react js
// Common js : node js
const express = require("express");
const mongoose = require("mongoose");
const { Schema } = require("mongoose");
// App :- object
const app = express();
app.use(express.json());

// Mongodb Connectivity :-
main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(
    "mongodb+srv://ravikumar:Ravi123@cluster0.cy4n69o.mongodb.net/?appName=Cluster0",
  );
  console.log("Database connect");
}

// SCHEMA
// User Schema :-
// create schema
const userSchema = new Schema({
  email: String,
  username: String,
  password: String,
});
// create a Model and also create a collection(user) into the database
const User = mongoose.model("user", userSchema);

// Api's
// Signup for a user (Create a user):-
app.post("/signup", async (req, res) => {
  console.log("User Data", req.body);
  // get data from body
  const { username, email, password } = req.body;

  // use the model
  const createUser = new User({
    email: email,
    username: username,
    password: password,
  });

  // Save the user
  const saveuser = await createUser.save();
  // send res of saveuser
  res.json({ message: true, user: saveuser });
});

// get all users :-
app.get("/getUsers", async (req, res) => {
  // Select the Model and also find the data.
  const getdata = await User.find({});
  console.log(getdata);
  res.json({ message: "user fetch", allUser: getdata });
});

// Delete a User:-
app.delete("/deleteUser/:id", async (req, res) => {
  // 1. Check the id :- http://localhost:8000/deleteUser/123213133
  console.log(req.params);
  const id = req.params.id;
  console.log(id);
  const dldata = await User.deleteOne({ _id: id });
  res.json({ message: dldata });
});

// Api's :- GET , POST , PUT , DELETE
// req :- request
// res :- response

// Middlewares :-

app.get("", (req, res) => {
  // res.send("Message")
  res.json({ name: "Gudiya", course: "mern stack" });
});

///////////////////////////////////////////////////////////////////////
// Callback functions :-
app.listen(8000, () => {
  console.log("Server Create");
});
