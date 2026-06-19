import axios from 'axios'
import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

function Login() {

    const [loginData, setLoginData] = useState()

    console.log(loginData)
    const nav = useNavigate()

    function getData(e) {
        setLoginData({
            ...loginData,
            [e.target.name]: e.target.value
        })
    }

    async function handleSubmit(e) {
        e.preventDefault()
        const res = await axios.post("http://localhost:8000/api/users/login", loginData).then((res) => {
            console.log(res.data.status)
            // alert()
            localStorage.setItem("hr",JSON.stringify(res.data.data))
            if (res.data.status) {
                toast.success("")
                nav("/")
            }
        })

    }

    return (
        <>
            <Toaster/>
            <h1>Login Form</h1>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="">Email</label>
                <input type="text" name="email" id="" onChange={getData} />
                <label htmlFor="">Password</label>
                <input type="password" name="password" id="" onChange={getData} />
                <button type='submit'>Login</button>
            </form>
        </>
    )
}

export default Login
