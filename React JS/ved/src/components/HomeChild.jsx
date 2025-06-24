import React from "react";
import image from "./images/hanuman.png";

function HomeChild(props) {
  // const obj = {
  //     id : 1,
  //     bg : "A+"
  // }
  console.log("obj.id");

  return (
    <div>
      <h1>My Name is {props.age}</h1>
      <img src={image} alt="" />
    </div>
  );
}

export default HomeChild;
