import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

function More() {
  let [id] = useSearchParams();
  let productID = id.get("id");

  let [apiData, setApiData] = useState  ([]);
  console.log(apiData);

  // Async await = asynchronous = promises
  async function getData() {
    let dataa = await fetch("https://dummyjson.com/products");
    let jsondata = await dataa.json();
    const newdata = jsondata.products.find((item)=>item.id == productID)
    setApiData(newdata)
  }

  // ()=> arrow function

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1>Compoenents</h1>
    </div>
  );
}

export default More;
