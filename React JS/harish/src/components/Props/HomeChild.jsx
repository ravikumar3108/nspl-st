import React from "react";

// get the props data
function HomeChild(props) {
  return (
    <>
      {/* Props ares used to send data one component to another component */}
      <h1>MySelf {props.x}</h1>
      <h2>My Age is {props.age}</h2>
    </>
  );
}

export default HomeChild;
