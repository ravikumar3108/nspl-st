// console.log("Run File...")
// console.log("Run File...")
// console.log("Run File...")
// console.log("Run File...")
// console.log("Run File...")

// Create a Server.....
const express = require("express");
const mongoose = require("mongoose");

main().catch((err) => console.log(err));

const app = express();



async function main() {
  await mongoose.connect(
    "mongodb+srv://ravikumar:Ravi123@cluster0.cy4n69o.mongodb.net/Jyoti?appName=Cluster0",
  );
  console.log("Database Connected.");
  // localhost  : mongodb://127.0.0.1:27017
}

// Middlewares :-
app.use(express.json());

// Api's :- Get , post , put , delete

app.get("/api/get", (req, res) => {
  res.json({ status: true, message: [], data: [] });
});

// Schema :-

// const userSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   age: Number,
// });

// const userModel = mongoose.model("user", userSchema);

// Post Api
// app.post("/api/post", async (req, res) => {
//   console.log(req.body);

//   const { name, email, age, password } = req.body;

//   const newUser = new userModel({
//     name: name,
//     email: email,
//     age: age,
//   });

//   const saveUSer = await newUser.save();
//   res.json({ message: "Post Api", data: saveUSer });
// });

app.use("/api/users", require("./routes/userRoutes"));

// PORT Number
app.listen(8000, () => {
  console.log("Server Create.");
});
