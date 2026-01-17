import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

function CreateProduct() {
  let [allData, setAllData] = useState();
  console.log("alldata", allData);

  function getAllData(e) {
    setAllData({
      // spread operator
      ...allData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    let data = await axios
      .post("http://localhost:8000/product/createProduct", allData)
      .then((res) => {
        console.log(res)
      });
  }
 

  return (
    <>
      <Toaster />
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Title</label> <br />
        <input
          type="text"
          name="title"
          id=""
          onChange={getAllData}
        /> <br /> <br />
        <label htmlFor="">description</label> <br />
        <input
          type="text"
          name="description"
          id=""
          onChange={getAllData}
        />{" "}
        <br /> <br />
        <label htmlFor="">Price</label> <br />
        <input
          type="text"
          name="Price"
          id=""
          onChange={getAllData}
        /> <br /> <br />
        <button type="submit">Submit</button>
      </form>

      {/* <button onClick={() => localStorage.removeItem("user")}>Logout</button> */}
    </>
  );
}

export default CreateProduct;
