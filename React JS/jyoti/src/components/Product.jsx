import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Product() {

  const [productData, setProductData] = useState()

  async function getproducts() {
    const data = await axios.get("http://localhost:8000/api/product/getAllProducts").then((res) => {
      console.log(res)
    })
  }

  useEffect(() => {
    getproducts()
  }, [])


  return (
    <div>

    </div>
  )
}

export default Product
