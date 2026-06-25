import axios from 'axios'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

function Details() {

    const { id } = useParams()
    console.log(id)


    async function getSingleProduct() {
        const data = await axios.get(`http://localhost:8000/api/product/singleProduct/${id}`)
        console.log(data)
    }

    useEffect(() => {
        getSingleProduct()
    }, [])

    return (
        <div>
            <h1>Details By backend</h1>
        </div>
    )
}

export default Details
