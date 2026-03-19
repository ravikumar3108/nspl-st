// ES6 : Ecmascipt 6 : react js
// Common js : node js

const express = require("express");
const mongoose = require("mongoose");
// App :- object
const app = express();

// Mongodb Connectivity :-

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb+srv://ravikumar:Ravi123@cluster0.cy4n69o.mongodb.net/?appName=Cluster0");
  console.log("Database connect")
}

// Api's :- GET , POST , PUT , DELETE
// req :- request
// res :- response

// Middlewares :-
app.use(express.json());

app.get("", (req, res) => {
  // res.send("Message")
  res.json({ name: "Gudiya", course: "mern stack" });
});

// Callback functions :-

app.post("/", (req, res) => {
  console.log(req.body);
  res.json({ message: "true" });
});

app.listen(8000, () => {
  console.log("Server Create");
});
