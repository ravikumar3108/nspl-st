import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

function CreateProduct() {
  let [allData, setAllData] = useState();
  console.log("alldata", allData);
  const [productImg, setProductImg] = useState();
  console.log(productImg);

  function getAllData(e) {
    setAllData({
      // spread operator
      ...allData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(allData.title);
    const fdata = new FormData();
    fdata.append("title", allData.title);
    fdata.append("description", allData.description);
    fdata.append("price", allData.price);
    fdata.append("image", productImg);

    let data = await axios
      .post("http://localhost:8000/product/createProduct", fdata)
      .then((res) => {
        console.log(res);
      });
  }

  //  src={`data:image/;base64,${btoa(
  //                   String.fromCharCode(
  //                     ...new Uint8Array(products?.image?.data?.data || "")
  //                   )
  //                 )}`} 

  return (
    <>
      <Toaster />
      <form action="" onSubmit={handleSubmit} enctype="multipart/form-data">
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
        <input
          type="file"
          name="image"
          id=""
          onChange={(e) => setProductImg(e.target.files[0])}
        />
        <button type="submit">Submit</button>
      </form>

      {/* <button onClick={() => localStorage.removeItem("user")}>Logout</button> */}
    </>
  );
}

export default CreateProduct;
