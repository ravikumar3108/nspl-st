import axios from "axios";
import React, { useEffect } from "react";

function BackCart() {
  async function getCarts(e) {
    let data = await axios
      .get("http://localhost:8000/product/getCarts")
      .then((res) => {
        console.log(res);
      });
  }

  useEffect(() => {
    getCarts();
  }, []);

  return <div></div>;
}

export default BackCart;
