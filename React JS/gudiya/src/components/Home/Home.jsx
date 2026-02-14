import React from "react";
import Slider from "./Slider";
import Products from "./Products";
import { kitchen, sampleProducts, electronics } from "./Data";
import { clothes, makeup, accesories } from "./Data2";
import Api from "./Api";

function Home() {
 
  return (
    <>
      <Slider />
      <Products
        cont1={sampleProducts}
        cont2={electronics}
        cont3={kitchen}
        cont1Head={"sampleProducts"}
      />
      <Products cont1={clothes} cont2={makeup} cont3={accesories} />
      <Api/>
    </>
  );
}

export default Home;
