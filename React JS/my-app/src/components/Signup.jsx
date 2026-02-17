import React, { useState } from "react";

function Signup() {
  // States
  // Hooks :-

  let [intialValue, setInitialValue] = useState(0);

  function Counter() {
    console.log("Runnning");
    setInitialValue(++intialValue);
  }
  function Sub() {
    console.log("Runnning");
    setInitialValue(--intialValue);
  }

  //
  let [name, setName] = useState();
  console.log(name);
  let [email, setEmail] = useState();
  let [password, setPassword] = useState();

  function getName(e) {
    setName(e.target.value);
  }

  return (
    <>
      <h1>{intialValue}</h1>
      <button onClick={Counter}>Add</button>
      <button onClick={Sub}>Sub</button>

      <form action="">
        <label htmlFor="">Name</label>
        <input type="text" name="" id="" onChange={getName} />
        <label htmlFor="">Email</label>
        <input type="email" name="" id="" />
        <label htmlFor="">Password</label>
        <input type="password" name="" id="" />
      </form>
    </>
  );
}

export default Signup;
