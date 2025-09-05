//  create a function component
import React, { useState } from "react";
import Navbar from "./Navbar";
import image from "./images/download.jpg";
import HomeChild from "./Props/HomeChild";
import slider1 from "./images/slider.avif";
import slider2 from "./images/slider2.avif";
import slider3 from "./images/slider3.avif";
import CreateProducts from "./Products/CreateProducts";
import GetUsers from "./Products/GetUsers";

function Home() {
  let imagesData = [
    {
      id: 1,
      image: slider1,
      text: "SLider 1",
    },
    {
      id: 2,
      image: slider2,
      text: "SLider 2",
    },
    {
      id: 3,
      image: slider3,
      text: "SLider 3",
    },
  ];

  let [data, setData] = useState(0);

  function LeftSlide() {
    if (data > 0) {
      setData(data - 1);
    }
    if (data == 0) {
      setData(2);
    }
  }

  function RightSlide() {
    if (data < 2) {
      setData(data + 1);
    }
    if (data == 2) {
      setData(0);
    }
  }

  return (
    <>
      <div className="slider">
        <GetUsers />

        {/* <CreateProducts/> */}
        {/* {imagesData &&
          imagesData.map((item, i) => {
            return (
              <>
                <div className={`${i == data ? "active" : "none"}`}>
                  <img src={item.image} alt="" width={"100%"} />;
                  <h1>{item.text}</h1>
                  <button onClick={LeftSlide}>Left</button>
                  <button onClick={RightSlide}>Right</button>
                </div>
              </>
            );
          })} */}
      </div>
    </>
  );
}

export default Home;
