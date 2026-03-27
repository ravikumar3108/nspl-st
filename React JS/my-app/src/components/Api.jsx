import React, { useEffect, useState } from 'react'

function Api() {

    // Store the data into a state
    const [apiData, setApiData] = useState([])
    console.log("apidata", apiData)

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

    return (
        <>

            {/* Map :-  */}
            <div className='main' style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
                {apiData.map((item) => {
                    return (
                        <>
                            <div className='box' style={{ width: "22%", border: "1px solid", height: "200px", margin: "10px" }}>
                                <h1>{item.title}</h1>
                                <p>{item.description}</p>
                                {/* <img src={item.images} alt="" /> */}
                            </div>
                        </>
                    )
                })}
            </div>


        </>
    )
}

export default Api


