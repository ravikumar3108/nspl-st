const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(
    "mongodb+srv://ravikumar:Ravi123@cluster0.cy4n69o.mongodb.net/?appName=Cluster0",
  );
  console.log("DataBase Connect");
}

// Middlewares :-
app.use(express.json());
app.use(cors());
// Cors :- Cross-Origin Resource Sharing (CORS) is an HTTP-header based browser security mechanism that
// allows a server to permit resources (e.g., fonts, APIs)
// to be loaded by web applications on different domains, overcoming the same-origin policy.

// Mongodb :-
// Create a User Schema

const userschema = new mongoose.Schema({
  username: {
    type: String,
    // unique: true,
    // trim: true,
  },
  email: {
    type: String,
  },
  name: {
    type: String,
  },
  password: {
    type: String,
  },
});

// Create a Model :-
const User = mongoose.model("user", userschema);

// Api:- Create a user (Signup)
app.post("/signup", async (req, res) => {
  // Step:1 :- Check the data. (req.body)
  // console.log(req.body);

  try {
    // this data belongs to frontend
    const { email, username, name, password } = req.body;

    const createuser = new User({
      // left side :- schema name
      // right side :- body name
      email: email,
      username: username,
      name: name,
      password: password,
    });

    // save the data
    const saveuser = await createuser.save();

    if (saveuser) {
      res
        .status(200)
        .json({ message: "Success", status: true, user: saveuser });
    } else {
      res.status(500).json({ message: "error", status: false });
    }
  } catch (error) {
    res.json({ error: error, message: "Error in Signup" });
  }
});

// login Api ======================
app.post("/login", async (req, res) => {
  console.log(req.body);
  try {
    const { email } = req.body;

    const existUser = await User.findOne({ email: email });
    console.log(existUser);

    if (!existUser) {
      res.status(404).json({ message: "failed", status: false });
    }

    res.status(200).json({ message: "Success", status: true, user: existUser });
  } catch (error) {
    res.json({ error: error, message: "Error in login" });
  }
});


// to check a server
app.get("", (req, res) => {
  res.json({ message: "Success", status: true });
});

// Create a Server :
app.listen(8000, (req, res) => {
  console.log("Server Start");
});
