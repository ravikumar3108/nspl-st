const express = require("express");
const app = express();
const mongoose = require("mongoose");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb+srv://ravikumar:Ravi123@cluster0.cy4n69o.mongodb.net/Hriday?appName=Cluster0");
  console.log("Database Connected")
}

app.use(express.json());

app.get("/get", async (req, res) => {
  console.log();
  res.json({ message: "Sucess" });
});

app.use("/api/users", require("./routes/userRoutes"));

app.listen(8000, () => {
  console.log("Server Create");
});
