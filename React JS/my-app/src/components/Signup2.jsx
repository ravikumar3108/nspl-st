import axios from "axios";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

function Signup2() {
  // States
  // Hooks :-

  let [alldata, setData] = useState();
  let [loading, setLoading] = useState(false)
  console.log(alldata);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8000/api/users/signup", alldata).then((res) => {
        console.log(res.data.status)
        // alert()
      })

    } catch (error) {
      console.log(error)
    }
  }

  function getValue(e) {
    setData({
      // Spread Operator
      ...alldata,
      [e.target.name]: e.target.value,
    });
  }



  return (
    <>
      <Toaster />
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Username</label>
        <input type="text" name="name" id="" onChange={getValue} />
        <label htmlFor="">Email</label>
        <input type="email" name="email" id="" onChange={getValue} />
        <label htmlFor="">Password</label>
        <input type="password" name="password" id="" onChange={getValue} />

        {loading ? <button type="">Loading.......</button> : <button type="submit">Submit</button>}
      </form>
    </>
  );
}

export default Signup2;
