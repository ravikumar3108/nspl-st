import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function MoreDetails() {

    const { id } = useParams()
    console.log(id)

    const [data, setData] = useState()
    console.log(data)

    async function getApi() {
        const dt = await fetch("https://dummyjson.com/products")
        const dtjson = await dt.json()
        const apidata = dtjson.products
        // console.log(apidata)
        const singledata = apidata.find((item) => item.id == id)
        // setData(singledata)
    }

    useEffect(() => {
        getApi()
    }, [])
    return (
        <>
            <h1>More details</h1>
            <h2>{data?.title}</h2>
        </>
    )
}

export default MoreDetails
