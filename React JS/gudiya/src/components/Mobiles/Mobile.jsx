import React from "react";
import { mob } from "./MobileData";

function Mobile() {
  return (
    <>
      <section className="mobiles">
        <h2>Mobiles</h2>
        <div className="mobile-main">
          {mob.map((item) => {
            return (
              <>
                <div className="box">
                  <h1>{item.id}</h1>
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
