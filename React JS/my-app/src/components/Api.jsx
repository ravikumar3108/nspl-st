import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Api() {

    // Store the data into a state
    const [apiData, setApiData] = useState([])

    const [filterApiData, setFilterApiData] = useState([])

    // Apis 
    // Asynchronus function 
    // promises
    // callback 
    // JSON Data :-

    async function getApiData() {
        const data = await fetch("https://dummyjson.com/products")
        const jsondata = await data.json()
        console.log(jsondata.products)
        setApiData(jsondata.products)
        setFilterApiData(jsondata.products)
    }

    // Useeffect :- Side effect of our components.
    // Arrow function 
    //const arr =  ()=> {}  

    useEffect(() => {
        getApiData()
    }, [])

    // [] :- dependencies


    // Example for map :-
    // let arr = [1, 2, 3, 4, 5, 67, 8, 9, 0]

    // function getMultiple() {
    //     let data = arr.map((item) => item * 2)
    //     console.log("multiple data ", data)
    // }

    // getMultiple()

    function filterproduct(category) {
        const filterApi = apiData.filter((item) => item.category == category)
        console.log(filterApi)
        setFilterApiData(filterApi)
    }

    function AllData() {
        setFilterApiData(apiData)
    }

    return (
        <>
            <h1 style={{ textAlign: "center", margin: "20px 0" }}>
                🛍️ Products
            </h1>

            {/* Buttons */}
            <div style={{ textAlign: "center", marginBottom: "20px" }}>
                <button className="btn" onClick={AllData}>All</button>
                <button className="btn" onClick={() => filterproduct("beauty")}>Beauty</button>
                <button className="btn" onClick={() => filterproduct("furniture")}>Furniture</button>
                <button className="btn" onClick={() => filterproduct("fragrances")}>Fragrance</button>
            </div>

            {/* Product Cards */}
            <div className="container">
                {filterApiData.map((item) => {
                    return (
                        <div className="card" key={item.id}>
                            <img src={item.thumbnail} alt={item.title} />

                            <div className="card-body">
                                <Link to={`/details/${item.id}`}><h3>{item.title}</h3></Link>
                                <p>{item.description.slice(0, 60)}...</p>

                                <div className="price-rating">
                                    <span>₹{item.price}</span>
                                    <span>⭐ {item.rating}</span>
                                </div>

                                <button className="buy-btn">Buy Now</button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default Api


