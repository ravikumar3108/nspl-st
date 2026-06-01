// console.log("Run File...")
// console.log("Run File...")
// console.log("Run File...")
// console.log("Run File...")
// console.log("Run File...")

// Create a Server.....
const express = require("express");

const app = express();

// Middlewares :-
app.use(express.json());

// Api's :- Get , post , put , delete

app.get("", (req, res) => {
  res.json({ status: true, message: [], data: [] });
});

// Post Api
app.post("", (req, res) => {
  console.log(req.body);
  res.json({ message: "Post Api" });
});

// PORT Number
app.listen(8000, () => {
  console.log("Server Create.");
});
