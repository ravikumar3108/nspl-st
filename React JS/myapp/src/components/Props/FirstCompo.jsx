import React from "react";
import SecondCompo from "./SecondCompo";

function FirstCompo() {
  let name = "dheeraj";
  let age = 12;
  return (
    <div>
      <h1>Props Compo</h1>
      {/* Send data by props */}
      <SecondCompo name={name} dheeraj={age}/>
    </div>
  );
}

export default FirstCompo;
