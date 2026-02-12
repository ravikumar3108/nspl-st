import React from "react";
import { sampleProducts } from "./Data";

function Products() {
  // Arrow function
  // Map function

  // ()=> {}

  // const arrow = ()=>{}
  // function arrow(){}

  return (
    <>
      <div className="flex justify-between">
        <div className="border w-[33%]">
          <h1>moreExplore more</h1>
          <div className="flex justify-between mx-auto flex-wrap">
            {sampleProducts.map((item) => {
              return (
                <>
                  <div className="border w-[44%] p-10 m-2 bg-gray-300">
                    <h1>{item.id}</h1>
                    <h1>{item.title}</h1>
                  </div>
                </>
              );
            })}
          </div>
        </div>
        <div className="border w-[33%]">
          <h1>Keep shopping for</h1>
          <div className="flex justify-between mx-auto flex-wrap">
            {sampleProducts.map((item) => {
              return (
                <>
                  <div className="border w-[44%] p-10 m-2">
                    <h1>{item.id}</h1>
                    <h1>{item.title}</h1>
                  </div>
                </>
              );
            })}
          </div>
        </div>
        <div className="border w-[33%]">
          <h1>Continue shopping for</h1>
          <div className="flex justify-between mx-auto flex-wrap">
            {sampleProducts.map((item) => {
              return (
                <>
                  <div className="border w-[44%] p-10 m-2">
                    <h1>{item.id}</h1>
                    <h1>{item.title}</h1>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;
