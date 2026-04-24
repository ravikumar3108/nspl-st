import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

function Login() {


  let [loginData, setLoginData] = useState()

  const nav = useNavigate()

  console.log(loginData)
  function getData(e) {
    setLoginData(
      {
        ...loginData,
        [e.target.name]: e.target.value
      }
    )
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const res = await axios.post("http://localhost:8000/login", loginData).then((res) => {
      console.log(res.data.status)
      if (res.data.status) {
        toast.success("Suucessful login")
        localStorage.setItem("nsplAuth", "true")
        setTimeout(() => {
          nav("/")
        }, 2000);
      } else {
        toast.error(res.data.message)
      }
    })
  }


  return (

    <>
      <Toaster />
      <div className="login-container">
        <div className="login-box">

          <h2>Login</h2>

          {/* Email */}
          <form action="" onSubmit={handleSubmit}>
            <div className="input-group">
              <label>Email</label>
              <input type="email" placeholder="Enter your email" name="email" onChange={getData} />
            </div>

            {/* Password */}
            <div className="input-group">
              <label>Password</label>
              <input type="password" placeholder="Enter your password" name="password" onChange={getData} />
            </div>

            {/* Options */}


            {/* Button */}
            <button className="login-btn" type="submit">Login</button>

            {/* Signup */}
            <p className="signup-text">
              Don't have an account? <Link to={"/signup"}>Sign up</Link>
            </p>
          </form>

        </div>
      </div>


    </>
  );
}

export default Login;