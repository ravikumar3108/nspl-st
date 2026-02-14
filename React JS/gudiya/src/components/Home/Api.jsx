import React, { useEffect, useState } from "react";

function Api() {
  const [apiData, setApiData] = useState();
  console.log(apiData);
  //   Asynchronus function
  const ApiData = async () => {
    const data = await fetch("https://dummyjson.com/recipes");
    const jsondata = await data.json();
    setApiData(jsondata.recipes);
  };

  //   Side effect of our component

  useEffect(() => {
    ApiData();
  }, []);

  return (
    <>
      <h1>Products</h1>
    </>
  );
}

export default Api;
