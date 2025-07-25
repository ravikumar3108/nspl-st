import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  let [data, setData] = useState();

  // UseNavigate :- route one page to another page
  let nav = useNavigate();

  console.log("data", data);
  function getAllData(e) {
    setData({
      // spread operator
      ...data,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const getDataLocal = JSON.parse(localStorage.getItem("ved"));
    console.log(getDataLocal);
    if (true) {
      nav("/")
    } else {
      alert("Something went wrong");
    }
  }

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Username</label>
        <input
          type="text"
          name="username"
          id="usernmae"
          onChange={getAllData}
        />
        <label htmlFor="">Email</label>
        <input type="text" name="email" id="email" onChange={getAllData} />
        <label htmlFor="">Password</label>
        <input
          type="text"
          name="password"
          id="password"
          onChange={getAllData}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Login;
