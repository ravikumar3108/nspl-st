const express = require('express')
const app = express()
const usersRoutes = require("./routes/UserRoutes")
const product = require("./routes/productRoutes")
const cors = require('cors')
const multer = require('multer')


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads'); // Destination folder for uploaded files
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname); // Set the file name
  },
});

const upload = multer({ storage: storage });


const mongoose = require('mongoose');

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://raviluhaniwal318:ZElVoJDwr5XJvdMz@cluster0.us8usk1.mongodb.net/Harish');
  console.log("Database is Connected")
}

var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

// Middlewares 
app.use(cors())
app.use(express.json())
app.use(require("./routes/UserRoutes"))
// app.use(require("./routes/productRoutes"),upload.single('avatar'))
app.use("/product", upload.single('image'), require("./routes/productRoutes"))


app.get("/users", (req, res) => {
  res.json("Helooo Ravi kumar")
})



app.listen(8000, () => {
  console.log("Server is running")
})

