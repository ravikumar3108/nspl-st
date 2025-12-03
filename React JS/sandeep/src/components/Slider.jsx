import React, { useState } from "react";
import img1 from "../components/image/blog3.jpeg";
import img2 from "../components/image/blog6.jpeg";
import img3 from "../components/image/blog88.jpeg";
import img4 from "../components/image/WhatsApp Image 2025-11-11 at 12.28.06 PM.jpeg";

function Slider() {
  const SliderData = [
    {
      id: 1,
      image: img1,
      content: "Image 1",
    },
    {
      id: 2,
      image: img2,
      content: "Image 1",
    },
    {
      id: 3,
      image: img3,
      content: "Image 1",
    },
    {
      id: 4,
      image: img4,
      content: "Image 1",
    },
  ];

  let [sliderState, setSliderState] = useState(0);

  const handleLeft = () => {
    if (sliderState === 0) {
      //   setSliderState(SliderData.length - 1); // go to last slide
      setSliderState(3);
    } else {
      setSliderState(sliderState - 1);
    }
  };

  const handleRight = () => {
    setSliderState((sliderState += 1));
    if (sliderState == 4) {
      setSliderState(0);
    }
  };

  return (
    <div>
      <div className="slider" style={{ height: "400px", display: "flex" }}>
        {SliderData.map((item, i) => {
          return (
            <>
              <div className={`${i == sliderState ? "active" : "none"}`}>
                <img src={item.image} alt="" width={"100%"} />
                <button onClick={handleLeft}>Left </button>
                <button onClick={handleRight}>Right</button>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Slider;
