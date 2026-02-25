import React from "react";
import { mob } from "./MobileData";
import { useCart } from "react-use-cart";

function Mobile() {

  const { addItem } = useCart()

  return (
    <>
      <section className="mobiles">
        <h2>Mobiles</h2>
        <div className="mobile-main">
          {mob.map((item) => {
            return (
              <>
                <div className="box">
                  <h1>{item.title}</h1>
                  <h1>{item.price}</h1>
                  <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 cursor-pointer" onClick={() => addItem(item)}>Add to cart</button>
                </div>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Mobile;
