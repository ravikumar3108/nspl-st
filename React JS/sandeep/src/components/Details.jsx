import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Details() {
  // UseParams
  const { id } = useParams();

  let [apiData, setApiData] = useState([]);
  console.log(apiData);

  async function getData() {
    let getApiData = await fetch("https://dummyjson.com/products");
    let jsondata = await getApiData.json();
    const filterData = jsondata.products.find((item) => item.id == id);
    setApiData(filterData);
  }

  useEffect(() => {
    getData();
  }, []);

  

  return (
    <>
      <h1>{apiData.title}</h1>
    </>
  );
}

export default Details;
