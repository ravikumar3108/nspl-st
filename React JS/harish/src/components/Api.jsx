import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";

function Api() {
  let [apiData, setApiData] = useState([]);
  let [filterDD, setFilterDD] = useState([]);
  const { addItem, inCart } = useCart();

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
    setApiData(jsondata.products);
    setFilterDD(jsondata.products);
  }

  const filterItem = (category) => {
    const filterData = apiData.filter((item) => item.category == category);
    setFilterDD(filterData);
  };

  // Arrow Function => ()=>
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <button
        className="btn"
        onClick={() => {
          getData();
        }}
      >
        All
      </button>
      <button onClick={() => filterItem("beauty")} className="btn">
        Beauty
      </button>
      <button onClick={() => filterItem("fragrances")} className="btn">
        Frangnance
      </button>
      <button onClick={getData} className="btn">
        groceries
      </button>
      <button onClick={getData} className="btn">
        Furniture
      </button>

      {/* Array method map  */}
      {/* arrow function use as a Callback function  */}
      <div className="main" style={{ display: "flex", flexWrap: "wrap" }}>
        {filterDD.map((item) => {
          return (
            <>
              <div
                className="item"
                style={{
                  width: "28%",
                  border: "1px solid",
                  padding: "10px",
                  margin: "10px",
                }}
              >
                <h1> {item.id}</h1>
                <div
                  style={{
                    width: "10%",
                  }}
                >
                  <img src={item.images} alt="" width={"100%"} />
                </div>
                <p>{item.category}</p>
                <button>
                  <Link to={`/more?id=${item.id}`}>More</Link>
                </button>
                <div key={item.id}>
                  {inCart(item.id) ? (
                    <button>Added</button>
                  ) : (
                    <button onClick={() => addItem(item)}>Add to cart</button>
                  )}
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Api;
