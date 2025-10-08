// Functional Components 
import React from "react";
import img from "./image/pexels-anhdanghihi-34094302.jpg"

function Home() {

    let x = "Sandeep"
    let age = 23

    return (
        <>
            <h1 style={{ color: "green", padding: "10px", paddingTop: "20px" }}>My name is {x} . My Age is {age}.</h1>
            <h1 className="head">Heloo Home Page</h1>
            <img src={img} alt="" width={"100%"}/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint maxime unde nihil illum quibusdam dolores accusantium, id, consectetur quae incidunt porro architecto vitae rem quam quos, aut cupiditate esse ad.</p>
        </>
    )

}

export default Home 
