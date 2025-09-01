import axios from "axios";
import React, { useState } from "react";

function CreateProducts() {
  const [data, setData] = useState("");
  const [image, setImage] = useState("");
  console.log(image);
  const onchangeData = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Funcin runnn");
    const fdata = new FormData();
    fdata.append("title", data.title);
    fdata.append("category", data.category);
    fdata.append("image", image);
    const sendata = await axios
      .post("http://localhost:8000/product/createproduct", fdata)
      .then((res) => {
        console.log(res.data);
      });
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit} enctype="multipart/form-data">
        <input
          type="text"
          name="title"
          id=""
          placeholder="title"
          onChange={onchangeData}
        />
        <input
          type="text"
          name="category"
          id=""
          placeholder="category"
          onChange={onchangeData}
        />
        <input
          type="file"
          name="image"
          id=""
          onChange={(e) => setImage(e.target.files[0])}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CreateProducts;
