import React, { useState } from 'react'

function Api() {

    // Store the data into a state
    const [apiData, setApiData] = useState()
    console.log("apidata",apiData)

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
    }


    return (
        <>
            <button onClick={getApiData}>Api Fetch</button>

        </>
    )
}

export default Api


