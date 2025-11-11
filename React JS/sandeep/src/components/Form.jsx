import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

function Form() {
  let [firstname, setFirstname] = useState();
  console.log("firstname", firstname);

  // Usenavigate()
  const navigate = useNavigate();

  function getFirstName(e) {
    // console.log(e)
    setFirstname(e.target.value);
  }

  let [email, setEmail] = useState();
  console.log("email", email);
  function getEmail(e) {
    setEmail(e.target.value);
  }

  let [allData, setAllData] = useState();
  console.log("alldata", allData);

  function getAllData(e) {
    setAllData({
      // spread operator
      ...allData,
      [e.target.name]: e.target.value,
    });
  }

  // Json Object :- javascript object notation

  // let obj = {
  //     "name":"sandeep",
  //     "id":1
  // }

  // function handleSubmit(e){
  //     e.preventDefault()
  //     console.log("submit function call")
  //     localStorage.setItem("users",JSON.stringify(allData));

  // }

  // arrow function
  function myfunction() {}

  const myfun = () => {};

  // login function handle submit

  function handleSubmit(e) {
    e.preventDefault();
    let user = JSON.parse(localStorage.getItem("users"));

    if (
      allData &&
      user &&
      allData.firstname === user.firstname &&
      allData.email === user.email
    ) {
      loginPopUp()
      setTimeout(() => {
        navigate("/about");
      }, 3000);
    } else {
      alert("Invalid Details");
    }
  }

  function LogoutUser() {
    localStorage.removeItem("users");
  }

  //   react hot toast

  function loginPopUp() {
    toast.error("Succesfulll");
  }

  return (
    <>
      <Toaster />
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">FirstName</label> <br />
        <input type="text" name="firstname" id="" onChange={getAllData} />{" "}
        <br /> <br />
        <label htmlFor="">Lastname</label> <br />
        <input
          type="text"
          name="lastname"
          id=""
          onChange={getAllData}
        /> <br /> <br />
        <label htmlFor="">Email</label> <br />
        <input
          type="text"
          name="email"
          id=""
          onChange={getAllData}
        /> <br /> <br />
        <select name="gender" id="" onChange={getAllData}>
          <option value="1">Male</option>
          <option value="2">Female</option>
          <option value="3">Others</option>
          <option value="4">4</option>
        </select>
        <button type="submit">Submit</button>
      </form>

      <button onClick={() => localStorage.removeItem("user")}>Logout</button>
    </>
  );
}

export default Form;
