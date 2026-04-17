import React from 'react'
import Header from './Header'
import image from "./images/img.jpg"

function Home() {

    let x = 10
    let name = "Jyoti"


    return (
        <div style={{ backgroundColor: "green", color: "white", paddingTop: "10px" }}>
            <h1>Home Componenet {name}</h1>
            <img src={image} alt="" width={"50%"} height={"500px"}/>
        </div>
    )
}

export default Home
