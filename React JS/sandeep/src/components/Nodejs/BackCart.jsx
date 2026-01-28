import axios from "axios";
import React, { useEffect, useState } from "react";

function BackCart() {
  const [CartItems, setCartItems] = useState([]);
  console.log(CartItems);

  async function getCarts(e) {
    let data = await axios
      .get("http://localhost:8000/product/getCarts")
      .then((res) => {
        setCartItems(res.data.data);
      });
  }

  function deleteCartProduct(id) {
    console.log(id);
    const deletecart = axios.delete(`http://localhost:8000/product/deleteCartProduct/${id}`)
    // window.reload()
  }

  useEffect(() => {
    getCarts();
  }, []);

  return (
    <>
      <div>
        {CartItems.map((item) => {
          return (
            <>
              <div
                style={{
                  border: "1px solid",
                  margin: "10px",
                  width: "40%",
                  padding: "10px",
                }}
              >
                <p>{item._id}</p>
                <p>{item.title}</p>
                <button onClick={() => deleteCartProduct(item._id)}>
                  Delete
                </button>
              </div>
            </>
          );
        })}
      </div>
      ;
    </>
  );
}
export default BackCart;
