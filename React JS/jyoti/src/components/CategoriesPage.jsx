import React from 'react'
import { useParams } from 'react-router-dom'

function CategoriesPage() {

    const { category } = useParams()
    console.log(category)

    return (
        <div>
            <h1>Categories Page</h1>
        </div>
    )
}

export default CategoriesPage
