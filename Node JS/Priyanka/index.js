console.log("Heloo node js");
console.log("Heloo node js");

// Create a server
// Common js
// left side :  variables
// right side :- package name
const express = require("express");
// Create a object.
const app = express();

const mongoose = require("mongoose");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(
    "mongodb+srv://ravikumar:Ravi123@cluster0.cy4n69o.mongodb.net/priyanka?appName=Cluster0",
  );
  console.log("Databse Connected");
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const studentSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  email: String,
});

const Student = mongoose.model("student", studentSchema);

// Middlewares :-
app.use(express.json());

// Api's :- GET , POST , PUT , DELETE

app.get("", async (req, res) => {
  try {
    const getAll = await Student.find({});
    res.json({ data: getAll });
  } catch (error) {
    res.json({ message: "Error in Login", error: error });
  }
});

app.post("/createStudent", async (req, res) => {
  try {
    const { firstname, lastname, email, fathername, mobilno, address } =
      req.body;

    const existStudent = await Student.findOne({ email: email });
    // console.log(existStudent);

    if (!existStudent) {
      const createStudent = new Student({
        firstname: firstname,
        lastname: lastname,
        email: email,
      });

      const saveUser = await createStudent.save();
      if (saveUser) {
        res.json({ message: "Success", data: saveUser, status: true });
      } else {
        res.json({ message: "failed", status: false });
      }
    }

    res.json({
      message: "Student Already register with this mail",
      status: false,
    });
  } catch (error) {
    res.json({ message: "Error in Signup", error: error });
  }
});

// Create a server
// Callback function....
app.listen(8000, () => {
  console.log("Server Create Successfull...");
});
