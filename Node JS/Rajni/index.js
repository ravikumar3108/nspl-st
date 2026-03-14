// ES6 : Ecmascipt 6 : react js
// Common js : node js

const express = require("express");
// App :- object
const app = express();

// Api's :- GET , POST , PUT , DELETE
// req :- request
// res :- response

app.get("", (req, res) => {
  // res.send("Message")
  res.json({ name: "Gudiya", course: "mern stack" });
});

// Callback functions :-

app.listen(8000, () => {
  console.log("Server Create");
});
