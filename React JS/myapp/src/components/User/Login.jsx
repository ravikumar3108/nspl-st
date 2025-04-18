import React, { useState } from "react";
import { IoHomeSharp } from "react-icons/io5";

function Login() {
  // const [data, setData] = useState();

  // console.log(data);
  // function getValue(e) {
  //   setData(e.target.value);
  //   // console.log(e.target.value);
  // }

  const [data, setData] = useState();
  console.log(data)
  function getValue(e) {
    setData({
      // spread opertaor
      ...data,
      [e.target.name]: e.target.value,
    });
  }

  function SubmitData(e) {
    e.preventDefault()
    // JSON.stringify(data)    this method used to convert javascript object into JSON object
    localStorage.setItem("dheeraj", JSON.stringify(data));
  }

  return (
    <div>
      <form>
        <h1>Signup Form <IoHomeSharp /></h1>
        <label htmlFor="">Name</label>
        <input type="text" name="firstname" id="" onChange={getValue} />
        <label htmlFor="">Email</label>
        <input type="email" name="email" id="" onChange={getValue} />
        <label htmlFor="">Password</label>
        <input type="password" name="password" id="" onChange={getValue} />
        <button type="submit" onClick={SubmitData}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;
