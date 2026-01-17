// Functional Components
import React, { useEffect, useState } from "react";
import img from "./image/pexels-anhdanghihi-34094302.jpg";
import Header from "./Header";
import Data from "./Data";
import UseStateHook from "./Hooks/UseStateHook";
import Slider from "./Slider";
import Timer from "./Timer";
import axios from "axios";

function Home() {
  let x = "Sandeep";
  let age = 23;

  const [api, setApi] = useState([]);
  console.log(api);

  async function handleSubmit(e) {
    let data = await axios
      .get("http://localhost:8000/product/allproduct")
      .then((res) => {
        setApi(res.data.data);
      });
  }

  async function AddToCart(id) {
    console.log(id);
    let data = await axios
      .post(`http://localhost:8000/product/cart/${id}`)
      .then((res) => {
        console.log(res);
      });
  }

  useEffect(() => {
    handleSubmit();
  }, []);

  return (
    <>
      {/* <Header /> */}
      <h1>Home Component</h1>
      {api.map((item) => {
        return (
          <>
            <div
              style={{
                border: "1px solid",
                margin: "10px 20px",
                width: "22%",
                padding: "10px",
              }}
            >
              <h1>{item.title}</h1>
              <h1>{item.description}</h1>
              <h1>{item.price}</h1>
              <button onClick={() => AddToCart(item._id)}>Add to cart</button>
            </div>
          </>
        );
      })}
    </>
  );
}

export default Home;
