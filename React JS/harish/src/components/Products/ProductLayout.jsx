import React, { useState } from "react";

function ProductLayout(props) {
  console.log(props);

  let [allData, setData] = useState(props.data);
  console.log(allData);

  return (
    <>
      {/* Array method map  */}
      {/* arrow function use as a Callback function  */}

      {allData && allData.map((item) => {
        return (
          <>
            <div
              className="item"
              style={{
                width: "28%",
                border: "1px solid",
                padding: "10px",
                margin: "10px",
              }}
            >
              <h1>{item.id}</h1>
              <div
                style={{
                  width: "10%",
                }}
              >
                <img src="" alt="" width={"100%"} />
              </div>
              <p>{item.title}</p>
              <button></button>
            </div>
          </>
        );
      })}
    </>
  );
}

export default ProductLayout;
