import React, { useEffect, useState } from 'react'

function Api() {

    let [apiData , setApiData]  = useState([])
    console.log(apiData)

    async function getData(){
        let data = await fetch("https://dummyjson.com/products")
        let jsondata = await data.json() 
        setApiData(jsondata.products)
    }
    // arrow function  ()=> {}
    useEffect(()=>{
        getData()
    },[])




  return (
    <>
      {/* <button onClick={getData}>Function Call</button> */}

    {apiData.map((item)=>{
        return(
            <>
               <h1> {item.title}</h1>
            </>
        )
    })}


    </>
  )
}

export default Api
