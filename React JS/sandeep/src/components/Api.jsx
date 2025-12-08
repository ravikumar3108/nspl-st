import React, { useState } from "react";
import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";

function Api() {
  {
    /* Api :- Application programing interface. 
        These are external services or endpoints that your React application interacts with to fetch or send data

        API :- https://dummyjson.com/products

    Asynchronus functions :- Async Await (Promises)
    UseEffect :- Side effect of our component

    */
  }

  let [apiData, setApiData] = useState([]);
  const [filterApi, setFilterApi] = useState([]);
  const { addItem } = useCart();

  async function getData() {
    let getApiData = await fetch("https://dummyjson.com/products");
    let jsondata = await getApiData.json();
    setApiData(jsondata.products);
    setFilterApi(jsondata.products);
  }

  useEffect(() => {
    getData();
  }, []);

  const filterData = (cate) => {
    const filterItems = apiData.filter((item) => item.category == cate);
    setFilterApi(filterItems);
  };
  const AllFilterData = () => {
    setFilterApi(apiData);
  };

  const CartPopUp = () => {
    toast.success("Item Add to Cart");
  };

  return (
    <>
    <Toaster/>
      <h1>Heloo</h1>
      {/* <button onClick={getData}>Fetch Data</button> */}

      {/* Map the all products */}
      {/* Item :- its is iteration(refrence) */}
      <button onClick={() => AllFilterData()}>All</button>
      <button>Furniture</button>
      <button>Fragness</button>
      <button onClick={() => filterData("beauty")}>beauty</button>
      <div
        className="products"
        style={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {filterApi.map((item) => {
          return (
            <>
              <div className="" style={{ border: "1px solid", width: "30%" }}>
                <Link to={`/details/${item.id}`}>
                  <h2>Title: {item.title} </h2>
                  <p>{item.description}</p>
                  <p>{item.price}</p>
                </Link>
                <button
                  onClick={() => {
                    addItem(item); CartPopUp();
                  }}
                >
                  Add to cart
                </button>
              </div>
            </>
          );
        })}
        <Link to={"/api"}>More Products</Link>
      </div>
    </>
  );
}

export default Api;
