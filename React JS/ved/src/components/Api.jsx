import React, { useEffect, useState } from "react";

function Api() {
  let [data, setData] = useState();

  // Fetch = Link to Our Api's Data
  // Async and await  , Asynchronus function , Promises
  // Callback function
  // arrow function  ()=> {}

  async function getData() {
    const api = await fetch("https://dummyjson.com/products");
    const jsondata = await api.json();
    console.log(jsondata.products);
    setData(jsondata.products);
  }

  //   Useeffect Hook  :- side effect of our component
  // [] = dependency

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1></h1>
    </div>
  );
}

export default Api;
