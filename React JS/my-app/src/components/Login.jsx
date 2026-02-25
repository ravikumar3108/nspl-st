import React, { useState } from 'react'

function Login() {

    const [loginData, setLoginData] = useState()

    console.log(loginData)

    function getData(e) {
        setLoginData({
            ...loginData,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        let saveUser = JSON.parse(localStorage.getItem("neeraj"))
        console.log("user", saveUser)
        if (saveUser.email == loginData.email && saveUser.password == loginData.password) {
            alert("Success")
        }
        else {
            alert("Failed")
        }

    }

    return (
        <>
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
