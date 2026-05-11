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
    setLoading(true)
    try {
      const data = await axios.post("http://localhost:8000/api/student/signup", alldata).then((res) => {
        console.log(res)
        if (res.data.status) {
          toast.success(res.data.message)
        } else {
          toast.error(res.data.message)
        }
        setLoading(false)
      })
    } catch (error) {
      toast.error(error)
      console.log(error)
      setLoading(false)
    }
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
      <Toaster />
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Username</label>
        <input type="text" name="username" id="" onChange={getValue} />
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
