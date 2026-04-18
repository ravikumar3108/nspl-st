console.log("Heloo node js");
console.log("Heloo node js");

// Create a server
// Common js
// left side :  variables
// right side :- package name
const express = require("express");
// Create a object.
const app = express();

const mongoose = require("mongoose");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(
    "mongodb+srv://ravikumar:Ravi123@cluster0.cy4n69o.mongodb.net/?appName=Cluster0",
  );
  console.log("Databse Connected");
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}



// Middlewares :-
app.use(express.json());

// Api's :- GET , POST , PUT , DELETE

app.get("", (req, res) => {
  res.json({ status: "true", data: [{ id: "1" }] });
});

app.post("", (req, res) => {
  console.log(req.body);
  res.json({ message: "Success", data: req.body });
});

// Create a server
// Callback function....
app.listen(8000, () => {
  console.log("Server Create Successfull...");
});
