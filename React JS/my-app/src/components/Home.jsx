import React from "react";
import img from "./images/blog5.jpeg";
import Header from "./Header";

function Home() {
  let x = "Neeraj";

  return (
    <>
      <Header />
      <h1 className="home" style={{ color: "green", paddingTop: "10px" }}>
        Home Component
      </h1>
      <h2>Heloo {x}</h2>
      <img src={img} alt="" width={"100%"} height={""} />
    </>
  );
}

export default Home;
