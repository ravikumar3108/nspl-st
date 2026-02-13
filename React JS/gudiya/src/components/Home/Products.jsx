import React from "react";
import { sampleProducts ,electronics , kitchen} from "./Data";

function Products(props) {
  console.log(props.cont1)
  console.log(props.cont2)
  console.log(props.cont3)
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
            {props?.cont1?.map((item) => {
              return (
                <>
                  <div className="border w-[44%] p-10 m-2 bg-gray-300">
                    <h1>{item.id}</h1>
                    <h1>{item.title}</h1>
                    <img src={item.image} alt="" />
                  </div>
                </>
              );
            })}
          </div>
        </div>
        <div className="border w-[33%]">
          <h1>Keep shopping for</h1>
          <div className="flex justify-between mx-auto flex-wrap">
            {props?.cont2?.map((item) => {
              return (
                <>
                  <div className="border w-[44%] p-10 m-2">
                    <h1>{item.id}</h1>
                    <h1>{item.title}</h1>
                    <img src={item.image} alt="" />
                  </div>
                </>
              );
            })}
          </div>
        </div>
        <div className="border w-[33%]">
          <h1>Continue shopping for</h1>
          <div className="flex justify-between mx-auto flex-wrap">
            {props?.cont3?.map((item) => {
              return (
                <>
                  <div className="border w-[44%] p-10 m-2">
                    <h1>{item.id}</h1>
                    <h1>{item.title}</h1>
                    <img src={item.image} alt="" />
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
