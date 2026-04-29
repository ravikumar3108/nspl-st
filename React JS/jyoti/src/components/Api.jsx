import React, { useState } from 'react'

function Api() {

    const [apiData, setApiData] = useState()

    console.log(apiData)

    async function getApiData() {
        const data = await fetch("https://dummyjson.com/products")
        const jsondata = await data.json()
        // console.log(jsondata.products)
        setApiData(jsondata.products)
    }


    return (
        <>
            <h1>Products</h1>
            <button onClick={getApiData}>Api Fetch</button>
            {
                apiData && apiData.map((item) => {
                    return (
                        <>
                            <h1>{item.title}</h1>
                        </>
                    )
                })
            }

        </>
    )
}

export default Api
