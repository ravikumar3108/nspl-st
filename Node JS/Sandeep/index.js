const express = require("express");
// Create a object
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "images/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});

const upload = multer({ storage: storage });

// Middlewares:-
app.use(express.json());
app.use(cors());
app.use("/user", require("./routes/userRoutes"));
app.use("/product", upload.single("image"), require("./routes/productRoutes"));

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(process.env.MONGO_URL);
  console.log("Databse Connect");
}
app.get("", (req, res) => {
  res.json({ message: "heii" });
});

app.listen(8000, () => {
  console.log("Server Create Successfull");
});
