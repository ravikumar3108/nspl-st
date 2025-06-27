import React, { useState } from "react";

function Api() {
  let [apiData, setApiData] = useState();
  console.log(apiData);

  // Usenavigate
  // Toast
  // Api
  // fetch
  // Asynchornus function = async and await // promises
  // callback function

  async function getData() {
    const data = await fetch("https://dummyjson.com/products");
    const jsondata = await data.json();
    setApiData(jsondata.products);
  }

  return (
    <div>
      <button onClick={getData}>Fecth Api</button>

      {/* Array method map  */}
    </div>
  );
}

export default Api;
