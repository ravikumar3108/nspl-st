//  create a function component
import React from "react";
import Navbar from "./Navbar";
import image from "./images/download.jpg";
import HomeChild from "./Props/HomeChild";

function Home() {
  let x = "Harish";

  let age = 10


  return (
    <>
      <h1>Home Componnet</h1>
      <h2>My Name is {x}</h2>
      <img src={image} alt="images" />
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero ipsum in
        corporis modi at inventore harum praesentium assumenda fugiat ullam!
        Est, cupiditate facere laboriosam assumenda libero accusantium vitae
        ipsam molestiae.
      </p>
      {/* Send data by the props */}
      <HomeChild x={x} age={age}/>
    </>
  );
}

export default Home;
