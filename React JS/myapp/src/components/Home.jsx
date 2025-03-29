import React from "react";
import image from "./Images/dark-style-valentines-day-celebration.jpg";
import Header from "./Header";
import SecondCompo from "./Props/SecondCompo";

function Home() {
  let name = "Dherraj Kumar";

  let age = 43;
  return (
    <>
      <h1>
        Heloo My name is {name} ,{age}
      </h1>

      <p
        id="paara"
        className="para"
        style={{ color: "white", backgroundColor: "black", padding: "20px" }}
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur,
        maxime soluta. Facilis, et nobis? Labore beatae laboriosam aliquam quae,
        accusamus magni nostrum ullam ipsum, dignissimos, tenetur architecto
        delectus! Vel, doloremque!
      </p>
      <img src={image} alt="" width="100%" />
    </>
  );
}

export default Home;
