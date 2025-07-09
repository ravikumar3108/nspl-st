import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Api() {

    let [apiData,setApiData] = useState([])
    console.log(apiData)

    // Async await = asynchronous = promises 
   async function getData(){
        let dataa = await fetch("https://dummyjson.com/products")
        let jsondata = await dataa.json()
        // console.log(jsondata.products)
        setApiData(jsondata.products)
    }

    // ()=> arrow function

    useEffect(()=>{
        getData()
    },[])

    return (
    <>
        <h1>

        </h1>
        {/* <button onClick={getData}>GEtdataa</button> */}
        {apiData.map((item)=>{
            return(
                <>
                <h3>{item.id}</h3>
                <Link to={`more?id=${item.id}`}>{item.title}</Link>
                <p>{item.description}</p>
                <p>{item.price}</p>
                <img src="" alt="" />
                </>
            )
        })}

    </>
  )
}

export default Api
