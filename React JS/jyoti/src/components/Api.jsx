import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from 'react-use-cart'

function Api() {

    const [apiData, setApiData] = useState()

    console.log(apiData)

    const { addItem } = useCart()


    async function getApiData() {
        const data = await fetch("https://dummyjson.com/products")
        const jsondata = await data.json()
        // console.log(jsondata.products)
        setApiData(jsondata.products)
    }

    // useEffect() :- side effect of our component 

    useEffect(() => {
        getApiData()
    }, [])



    return (
        <>
            <h1>Products</h1>
            <div className='' style={{ display: "flex", flexWrap: "wrap" }}>
                {
                    apiData && apiData.map((item) => {
                        return (
                            <>
                                <div style={{ border: "1px solid", padding: "10px", width: "19%", margin: "20px" }}>
                                    <h1><Link to={`/moredetails/${item.id}`}>{item.title}</Link></h1>
                                    <button onClick={() => addItem(item)}> Add to Cart</button>
                                </div>
                            </>
                        )
                    })
                }
            </div>

        </>
    )
}

export default Api
