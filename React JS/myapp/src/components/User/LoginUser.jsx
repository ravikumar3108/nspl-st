import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function LoginUser() {
  let [data, setData] = useState("");
  console.log(data)

  let nav = useNavigate()

  function getValue(e) {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e){
    e.preventDefault()
    const user = JSON.parse(localStorage.getItem("dheeraj"))
    if(user.email == data.email && user.password == data.password){
        // alert("Login Success")
        nav("/")

    }  else{
      toast.error("Failed")
    }
  }

  return (
    <div>
      <Toaster/>
      <form onSubmit={handleSubmit}>
        <h1>Login Form</h1>
        <label htmlFor="">Email</label>
        <input type="email" name="email" id="" onChange={getValue} />
        <label htmlFor="">Password</label>
        <input type="password" name="password" id="" onChange={getValue} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default LoginUser;
