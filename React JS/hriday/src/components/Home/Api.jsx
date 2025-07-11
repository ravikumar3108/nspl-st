import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Api() {
  let [apiData, setApiData] = useState([]);
  let [filterDD, setFilterDD] = useState([]);

  // Async await = asynchronous = promises
  async function getData() {
    let dataa = await fetch("https://dummyjson.com/products");
    let jsondata = await dataa.json();
    // console.log(jsondata.products)
    setApiData(jsondata.products);
    setFilterDD(jsondata.products)
  }

  // ()=> arrow function

  function FilterDataApi(category) {
    let filterData = apiData.filter((item)=>item.category == category)
    setFilterDD(filterData)
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h1></h1>
      <button onClick={getData}>All</button>
      <button onClick={()=>FilterDataApi("beauty")}>Beauty</button>
      <button onClick={()=>FilterDataApi("fragrances")}>Fragnance</button>
      <button onClick={()=>FilterDataApi("groceries")}>groceries</button>
      {/* <button onClick={getData}>GEtdataa</button> */}
      {filterDD.map((item) => {
        return (
          <>
            <h3>{item.id}</h3>
            <Link to={`more?id=${item.id}`}>{item.title}</Link>
            <p>{item.description}</p>
            <p>{item.price}</p>
            <img src="" alt="" />
          </>
        );
      })}
    </>
  );
}

export default Api;
