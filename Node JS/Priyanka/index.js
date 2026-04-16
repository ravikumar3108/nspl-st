console.log("Heloo node js");
console.log("Heloo node js");

// Create a server
// Common js
// left side :  variables
// right side :- package name
const express = require("express");
// Create a object.
const app = express();

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
