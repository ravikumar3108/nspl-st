import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

function Signup() {
  let [allData, setAllData] = useState();
  console.log("alldata", allData);

  function getAllData(e) {
    setAllData({
      // spread operator
      ...allData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault()
    let data = await axios.post("http://localhost:8000/user/signup", allData).then((res)=>{
        console.log(res.data)
    });
   
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

      {/* <button onClick={() => localStorage.removeItem("user")}>Logout</button> */}
    </>
  );
}

export default Signup;
