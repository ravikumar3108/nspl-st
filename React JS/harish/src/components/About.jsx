import React from "react";
import Navbar from "./Navbar";
import HomeChild from "./Props/HomeChild";

function About() {
  let x = "RAvi";
  let age = 23;
  return (
    <div>
      <h1>About</h1>
      <HomeChild x={x} age={age} />
    </div>
  );
}

export default About;
