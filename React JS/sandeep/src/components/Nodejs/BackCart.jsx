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
    const deletecart = axios.delete(
      `http://localhost:8000/product/deleteCartProduct/${id}`,
    );
    // window.reload()
  }

  function ITEM({ item }) {
    const [quantity, setQuantity] = useState(item?.quantity);

    async function addQuantity(id) {
      setQuantity(quantity + 1);
      try {
        const res = await axios.post(
          `http://localhost:8000/product/addQuantity/${id}`,
        );
        setQuantity(res.data.quantity);
        window.location.reload();
      } catch (error) {
        console.log("error in AddQauntity", error);
        setQuantity(quantity - 1);
      }
    }

    function subQuantity() {}

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
          <p>{item.description}</p>
          <p>Quantity :- {item?.quantity}</p>
          <button onClick={() => addQuantity(item._id)}>Add</button>
          <button onClick={() => subQuantity(item._id)}>Sub</button>
          <button onClick={() => deleteCartProduct(item._id)}>Delete</button>
        </div>
      </>
    );
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
              <ITEM item={item} />
            </>
          );
        })}
      </div>
      ;
    </>
  );
}
export default BackCart;
