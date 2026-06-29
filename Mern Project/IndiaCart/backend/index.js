require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const authRoutes = require("./routes/userRoutes");
const app = express();
connectDB();

// ====================================================
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },

  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({
  storage,
});

// =========================================================
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use(
  "/api/products",
  upload.array("images", 10),
  require("./routes/prodcutRoutes"),
);
app.use("/carts", require("./routes/cartRoutes"));

app.get("/", (req, res) => {
  res.send("API Running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
