import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetail() {

    // Hook:- UseParams

    const { id } = useParams()

    const [product, setProduct] = useState({})

    async function getApiData() {
        const data = await fetch("https://dummyjson.com/products")
        const jsondata = await data.json()
        console.log(jsondata.products)
        const findData = await jsondata.products.find((item) => item.id == id)
        setProduct(findData)
    }

    useEffect(() => {
        getApiData()
    }, [])


    return (
        <div className="detail-container">

            {/* Image Section */}
            <div className="detail-image">
                <img src={product.thumbnail} alt={product.title} />
            </div>

            {/* Info Section */}
            <div className="detail-info">
                <h1>{product.title}</h1>
                <p>{product.description}</p>

                <h2>₹ {product.price}</h2>
                <p>⭐ {product.rating}</p>

                <button className="buy-btn">Add to Cart</button>
                <button className="buy-btn">Buy Now</button>
            </div>
        </div>
    );
}

export default ProductDetail;