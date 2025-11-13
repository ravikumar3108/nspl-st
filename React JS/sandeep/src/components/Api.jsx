import React, { useState } from "react";
import { useEffect } from "react";

function Api() {
  {
    /* Api :- Application programing interface. 
        These are external services or endpoints that your React application interacts with to fetch or send data

        API :- https://dummyjson.com/products

    Asynchronus functions :- Async Await (Promises)
    UseEffect :- Side effect of our component

    */
  }

  let [apiData, setApiData] = useState();
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
    </>
  );
}

export default Api;
