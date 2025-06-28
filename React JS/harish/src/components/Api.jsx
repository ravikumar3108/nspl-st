import React, { useEffect, useState } from "react";

function Api() {
  let [apiData, setApiData] = useState([]);
  console.log(apiData);

  // Usenavigate
  // Toast
  // Api
  // fetch
  // Asynchornus function = async and await // promises
  // callback function
  // UseEffect = Side effect of our component

  
  async function getData() {
    const data = await fetch("https://dummyjson.com/products");
    const jsondata = await data.json();
    setApiData(jsondata.products);
  }
  
  // Arrow Function => ()=>
    
    useEffect(()=>{
      getData()
    },[])


  return (
    <div>
      <button onClick={getData}>Fecth Api</button>

      {/* Array method map  */}
      {/* arrow function use as a Callback function  */}
      <div className="main">
        {apiData.map((item) => {
          return (
            <>
             <div className="item">
               <h1> {item.id}</h1>
               <img src={item.images} alt="" />
               <p>{item.description}</p>
             </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Api;
