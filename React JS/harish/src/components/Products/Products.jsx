import React from "react";
import ProductLayout from "./ProductLayout";
import { Iphones, Vivo } from "../../Data";

function Products() {
  return (
    <>
      <div className="main" style={{ display: "flex", flexWrap: "wrap" }}>
        <ProductLayout data={Vivo} />
      </div>
      <div className="main" style={{ display: "flex", flexWrap: "wrap" }}>
        <ProductLayout data={Vivo} />
      </div>
      {/* <div className="main" style={{ display: "flex", flexWrap: "wrap" }}>
        <ProductLayout data={Vivo} />
      </div>
      <div className="main" style={{ display: "flex", flexWrap: "wrap" }}>
        <ProductLayout data={Vivo} />
      </div>
      <div className="main" style={{ display: "flex", flexWrap: "wrap" }}>
        <ProductLayout data={Vivo} />
      </div>
      <div className="main" style={{ display: "flex", flexWrap: "wrap" }}>
        <ProductLayout data={Vivo} />
      </div> */}
    </>
  );
}

export default Products;
