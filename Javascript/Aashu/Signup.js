console.log("Start");

document
  .getElementById("signupForm")
  .addEventListener("submit", function Signup(e) {
    console.log("Function runnn");
    e.preventDefault(); // stop the form auto-refreshing
    console.log(e);
    let username = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;

    const user = {
      username: username,
      email: email,
      password: password,
    };
    // 1. Key
    // 2. Value (exist data)

    // JSON Object :- Javascript Object Notation
    // 1. Tabular Form
    // 2. JSon Object
    // const users = {
    //   "username": "username",
    //   "id": 12,
    // };

    // JSON.stringify() // this method used to converrt js object into json object.

    // localStorage.setItem("Aashu", JSON.stringify(user));

    const existUser = JSON.parse(localStorage.getItem("Aashu"));
    if (user.email == existUser.email && user.password == existUser.password) {
      alert("Success");
    } else {
      alert("Failed");
    }
  });
