import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast'
import axios from 'axios'

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
    const res = axios.post("http://localhost:8000/api/users/login", loginData).then((res) => {
      console.log(res)
    })
  }

  return (
    <>
      <Toaster />
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
