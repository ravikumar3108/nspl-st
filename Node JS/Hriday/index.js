const express = require("express");

const app = express();

app.use(express.json());

app.get("/get", async (req, res) => {
  console.log();
  res.json({ message: "Sucess" });
});

app.use("/api/users", require("./routes/userRoutes"));

app.listen(8000, () => {
  console.log("Server Create");
});
