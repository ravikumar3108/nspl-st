import React, { useEffect, useState } from "react";

function Api() {
  let [data, setData] = useState([]);
  console.log(data)
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
      {
        data.map((item)=>{
          return(
            <>
              <h1>{item.id}</h1>
              <h1>{item.title}</h1>
              <h1>{item.tags[0]}</h1>
            </>
          )
        })
      }
    </div>
  );
}

export default Api;
