import React, { useState } from "react";

function Login() {
  let [initialname, setInitaialName] = useState(0);

  function Counter() {
    setInitaialName(++initialname);
  }

  let [userName, setUserName] = useState();

  function getData(e) {
    setUserName(e.target.value);
  }

  let [data, setData] = useState();
  console.log(data);
  function getAllData(e) {
    // spread operator
    setData({
        ...data,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div>
      {/* <h1>{initialname}</h1>
      <button onClick={Counter}>Plus</button> */}
      <form action="">
        <label htmlFor="">Usernam</label>
        <input type="text" name="username" id="1" onChange={getAllData} />
        <label htmlFor="">FirstName</label>
        <input type="text" name="firstname" id="2" onChange={getAllData} />
        <label htmlFor="">Password</label>
        <input type="text" name="password" id="3" onChange={getAllData} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Login;
