import React, { useState } from "react";

function Signup2() {
  // States
  // Hooks :-

  let [data, setData] = useState();
  console.log(data);

  function getValue(e) {
    setData({
      // Spread Operator
      ...data,
      [e.target.name]: e.target.value,
    });
  }

  //   Json Objects :- Javascript object notation
  // {"firstname":"Ravi","lastname":"Kumar","email":"gullukumar3108@gmail.com"}
  function handleSubmit(e) {
    e.preventDefault();
    // JSON.stringify() // this method used to convert data into json object.
    localStorage.setItem("neeraj", JSON.stringify(data));
  }
  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Username</label>
        <input type="text" name="username" id="" onChange={getValue} />
        <label htmlFor="">Email</label>
        <input type="email" name="email" id="" onChange={getValue} />
        <label htmlFor="">Password</label>
        <input type="password" name="password" id="" onChange={getValue} />

        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Signup2;
