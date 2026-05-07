import axios from "axios";
import React, { useState } from "react";

function Signup2() {
  // States
  // Hooks :-

  let [alldata, setData] = useState();
  console.log(alldata);

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(alldata)
    const data = await axios.post("http://localhost:8000/api/student/signup", alldata).then((res) => {
      console.log(res)
    })
  }

  function getValue(e) {
    setData({
      // Spread Operator
      ...alldata,
      [e.target.name]: e.target.value,
    });
  }

  //   Json Objects :- Javascript object notation
  // {"firstname":"Ravi","lastname":"Kumar","email":"gullukumar3108@gmail.com"}

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
