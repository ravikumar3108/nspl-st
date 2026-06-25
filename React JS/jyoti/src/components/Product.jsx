import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Product() {

  const [productData, setProductData] = useState([])

  async function getproducts() {
    const data = await axios.get("http://localhost:8000/api/product/getAllProducts").then((res) => {
      console.log(res)
      setProductData(res.data.data)
    })
  }

  useEffect(() => {
    getproducts()
  }, [])


  return (
    <div>
      {productData.map((item) => {
        return (
          <>

            <h1>{item.title}</h1>
            <Link to={`/backend/${item._id}`}>
              View
              </Link>

          </>
        )
      })}
    </div>
  )
}

export default Product
