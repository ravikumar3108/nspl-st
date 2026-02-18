import React, { useState } from "react";

function Signup() {
  // States
  // Hooks :-

  let [data, setData] = useState(0);

  function Counter() {
    setData(++data);
  }

  // //
  let [name, setName] = useState(null);
  console.log("Name :- ", name);
  let [email, setEmail] = useState();
  console.log("email", email);
  let [password, setPassword] = useState();
  console.log("password", password);

  function getName(event) {
    console.log(event.target.value);
    setName(event.target.value);
  }

  function getEmail(e) {
    setEmail(e.target.value);
  }
  function getPassword(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault(); // stop the page from auto-refresh
    console.log("running");
    localStorage.setItem("username", name);
  }

  return (
    <>
      <h1> Data :- {data}</h1>
      <button onClick={Counter}>Add</button>
      {/* <button onClick={Sub}>Sub</button> */}

      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Name</label>
        <input type="text" name="" id="" onChange={getName} />
        <label htmlFor="">Email</label>
        <input type="email" name="" id="" onChange={getEmail} />
        <label htmlFor="">Password</label>
        <input type="password" name="" id="" onChange={getPassword} />

        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Signup;
