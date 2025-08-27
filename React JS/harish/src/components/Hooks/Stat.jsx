import axios from "axios";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Stat() {
  // Usenavigate :-
  let nav = useNavigate();
  let [username, setUsername] = useState();

  function getData(e) {
    setUsername(e.target.value);
  }

  //   Multiple data

  let [data, setData] = useState("");
  console.log(data);
  function getAllData(e) {
    // spread operator :- to save the initial data(after the changes our state)
    // ...arr
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  }

  // function handleSubmit(e){
  //   e.preventDefault()
  //   let userdata = localStorage.setItem("newUsers",JSON.stringify(data))

  // }

  // to get a data from local storage

  async function handleSubmit(e) {
    e.preventDefault();
    console.log("Funcin runnn");
    // const fdata = new FormData();
    // fdata.append("name", data.name);
    // fdata.append("email", data.email);
    // fdata.append("password", data.password);
    const sendata = await axios
      .post("http://localhost:8000/userLogin", data)
      .then((res) => {
        console.log(res.data);
        // if (res.data.status) {
        //   alert("User Create Succesfull");
        // } else {
        //   alert("something went wrong");
        // }
      });
  }

  return (
    <div>
      <Toaster />
      <h1>heloo State Component</h1>
      <h2>{username}</h2>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" onChange={getAllData} />
        <label htmlFor="">Email</label>
        <input type="text" name="email" id="" onChange={getAllData} />
        <label htmlFor="">Password</label>
        <input type="text" name="password" id="" onChange={getAllData} />
        <button type="submit">Submit Button</button>
      </form>
    </div>
  );
}

export default Stat;
