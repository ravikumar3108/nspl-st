//  create a function component

import React from "react";
import Navbar from "./Navbar";
import HomeChild from "./HomeChild";

function Home() {
  let x = 10;

  // Props :- props stands for the properties
  // props are used to send data one component to another component

  let name = "ved";
  let age = 23;

  return (
    <>
      <h1>Helooo {x * 10}</h1>
      <p>Ved</p>
      {/* send data by the props  */}
      <HomeChild z={name} age={age} />
    </>
  );
}

export default Home;
