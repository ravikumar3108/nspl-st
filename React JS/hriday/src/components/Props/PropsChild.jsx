import React from "react";
import img from "../images/slider2.avif"

function PropsChild(props) {
  return (
    <div>
      <h1>Child props</h1>
      <h1>My name is {props.x}</h1>
      <h2>My age is {props.age}</h2>
      <img src={img} alt="" />
    </div>
  );
}

export default PropsChild;
