import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function Api() {
  {
    /* Api :- Application programing interface. 
        These are external services or endpoints that your React application interacts with to fetch or send data

        API :- https://dummyjson.com/products

    Asynchronus functions :- Async Await (Promises)
    UseEffect :- Side effect of our component

    */
  }

  let [apiData, setApiData] = useState([]);
  console.log(apiData);

  async function getData() {
    let getApiData = await fetch("https://dummyjson.com/products");
    let jsondata = await getApiData.json();
    setApiData(jsondata.products);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h1>Heloo</h1>
      {/* <button onClick={getData}>Fetch Data</button> */}

      {/* Map the all products */}
      {/* Item :- its is iteration(refrence) */}
      <div
        className="products"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {apiData.map((item) => {
          return (
            <>
              <Link to={`/details/${item.id}`}>
                <div className="" style={{ border: "1px solid", width: "30%" }}>
                  <h2>Title: {item.title} </h2>
                  <p>{item.description}</p>
                  <p>{item.price}</p>
                </div>
              </Link>
            </>
          );
        })}
      </div>
    </>
  );
}

export default Api;
