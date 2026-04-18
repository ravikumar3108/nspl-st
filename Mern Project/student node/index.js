const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const multer = require("multer");
const fs = require("fs");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});

const upload = multer({ storage: storage });

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

// student register form schema
const studentSchema = new mongoose.Schema({
  firstname: {
    type: String,
    // unique: true,
    // trim: true,
  },
  email: {
    type: String,
  },
  lastname: {
    type: String,
  },
  fathername: {
    type: String,
  },
  image: {
    data: Buffer,
    ContentType: String,
  },
  mobileno: String,
  address: String,
  duration: String,
  batch: String,
});

const StudentReg = mongoose.model("student", studentSchema);

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
    const { email, password } = req.body;

    const existUser = await User.findOne({ email: email });
    console.log(existUser);

    if (!existUser) {
      res.status(200).json({ message: "failed", status: false });
    }

    if (existUser.password !== password) {
      res.status(200).json({ message: "password incorrect", status: false });
    }

    res.status(200).json({ message: "Success", status: true, user: existUser });
  } catch (error) {
    res.json({ error: error, message: "Error in login" });
  }
});

app.post("/registerform", upload.single("image"), async (req, res) => {
  console.log(req.body);
  console.log(req.file);

  try {
    const {
      firstName,
      lastName,
      fatherName,
      batch,
      duration,
      email,
      address,
      mobile,
    } = req.body;

    const CreateStudentData = new StudentReg({
      firstname: firstName,
      lastname: lastName,
      fathername: fatherName,
      batch: batch,
      duration: duration,
      email: email,
      address: address,
      mobileno: mobile,
      image: {
        data: fs.readFileSync("uploads/" + req.file.filename),
        ContentType: "uploads/",
      },
    });

    const saveStudent = await CreateStudentData.save();

    if (saveStudent) {
      res.status(200).json({
        message: "Student Create Succesfull",
        status: true,
        student: saveStudent,
      });
    } else {
      res.status(200).json({ message: "Something went wrong", status: false });
    }
  } catch (error) {
    res.json({ error: error, message: "Error in Student Regsiter Form" });
  }
});

// get All Students
app.get("/allStudents", async (req, res) => {
  try {
    const fetchStudent = await StudentReg.find({});
    if (!fetchStudent) {
      res.status(200).json({ message: "failed  in fetch", status: false });
    }

    res
      .status(200)
      .json({ message: "Success", status: true, user: fetchStudent });
  } catch (error) {
    res.json({ error: error, message: "Error in Fetch Students" });
  }
});

// Delete a student
app.delete("/deleteStudent/:id", async (req, res) => {
  const id = req.params.id;
  console.log(id);
  const delStudent = await StudentReg.deleteOne({ _id: id });
  console.log(delStudent);
  res.json({ message: "Success", status: true });
});

// update a student
app.post("/updateStudent/:id", async (req, res) => {
  try {
    console.log(req.body);
    console.log(req.params);
    const updateStudent = await StudentReg.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      },
    );
    res.json({ message: "Success", user: updateStudent });
  } catch (error) {
    res.json({ error: error });
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
