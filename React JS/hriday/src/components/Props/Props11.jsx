import React from "react";
import PropsChild from "./PropsChild";

function Props11() {
  // Props :- Send data one component to another component

  let x = "hriday";
  let age = 23;

  return (
    <div>
      <h1>Props</h1>
      {/* Send data by props */}
      <PropsChild x={x} age={age} />
    </div>
  );
}

export default Props11;
