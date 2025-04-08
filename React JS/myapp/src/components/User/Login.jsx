import React, { useState } from "react";

function Login() {
  // const [data, setData] = useState();

  // console.log(data);
  // function getValue(e) {
  //   setData(e.target.value);
  //   // console.log(e.target.value);
  // }

  const [data, setData] = useState();
  console.log(data);
  function getValue(e) {
    setData({
      // spread opertaor
      ...data,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div>
      <form>
        <label htmlFor="">Name</label>
        <input type="text" name="firstname" id="" onChange={getValue} />
        <label htmlFor="">Email</label>
        <input type="email" name="email" id="" onChange={getValue} />
        <label htmlFor="">Password</label>
        <input type="password" name="password" id="" onChange={getValue} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Login;
