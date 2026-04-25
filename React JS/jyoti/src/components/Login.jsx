import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {

  const [loginData, setLoginData] = useState()

  function getValues(e) {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    })
  }

  const nav = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
    const existUser = JSON.parse(localStorage.getItem("jyoti"))
    console.log(existUser)

    if (existUser && existUser.email == loginData.email && existUser.password == loginData.password) {
      alert("Sucess")
      nav("/")
    }
    else {
      alert("Something went wrong")
    }
  }

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Email</label>
        <input type="text" name="email" id="" onChange={getValues} />
        <label htmlFor="">Password</label>
        <input type="text" name="password" id="" onChange={getValues} />
        <button type='submit'>Login</button>
      </form>
    </>
  )
}

export default Login
