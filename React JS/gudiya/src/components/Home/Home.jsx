import React from "react";
import Slider from "./Slider";
import Products from "./Products";
import { kitchen, sampleProducts, electronics } from "./Data";
import { clothes, makeup, accesories } from "./Data2";

function Home() {
  return (
    <>
      <Slider />
      <Products cont1={sampleProducts} cont2={electronics} cont3={kitchen} />
      <Products cont1={clothes} cont2={makeup} cont3={accesories} />
    </>
  );
}

export default Home;
