//  create a function component

import React from "react";
import Navbar from "./Navbar";

function Home() {
  let x = 10;

  return (
    <>
      <h1>Helooo {x * 10}</h1>
      <p>Ved</p>
    </>
  );
}

export default Home;
