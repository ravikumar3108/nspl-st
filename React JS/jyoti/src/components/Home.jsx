import React, { useEffect, useState } from 'react'
import Header from './Header'
import image from "./images/img.jpg"
import ChildComp from './ChildComp'
import Signup from './Signup'
import Signup2 from './Signup2'
import Slider from './Slider'
import Api from './Api'
import Product from './Product'

function Home() {

    let x = 10
    let name = "Jyoti"
    const [loginUser, setLoginUser] = useState()

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("neeraj"))
        setLoginUser(data)
    }, [])


    // Props :- send data one component to another components
    return (
        <div style={{ paddingTop: "10px" }}>
            <h1>Home Componenet {name}</h1>
            <Product/>
        </div>
    )
}

export default Home
