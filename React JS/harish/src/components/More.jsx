import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

function More() {
  const [productId] = useSearchParams();
  let id = productId.get("id");

  let [apiData, setApiData] = useState([]);

  // Usenavigate
  // Toast
  // Api
  // fetch
  // Asynchornus function = async and await // promises
  // callback function
  // UseEffect = Side effect of our component
  // UseParams => send data into tha url.

  async function getData() {
    const data = await fetch("https://dummyjson.com/products");
    const jsondata = await data.json();
    let newData = jsondata.products.find((item) => item.id == id);
    setApiData(newData)
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <h1>More Component</h1>
    </div>
  );
}

export default More;
