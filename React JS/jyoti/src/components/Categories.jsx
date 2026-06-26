import React from 'react'
import { Link } from 'react-router-dom'

function Categories() {

    // shoes
    // mobiles
    // clothe


    return (
        <div className='' style={{ margin: "30px" }}>
            <Link to={"/categorypage/clothe"} className='btn' style={{ margin: "20px 5px" }}>Clothes</Link>
            <Link to={"/categorypage/shoes"} className='btn' style={{ margin: "20px 5px" }}>Shoes</Link>
            <Link to={"/categorypage/mobiles"} className='btn' style={{ margin: "20px 5px" }}>Mobiles</Link>
            <Link className='btn' style={{ margin: "20px 5px" }}>Clothes</Link>
            <Link className='btn' style={{ margin: "20px 5px" }}>Shoes</Link>
            <Link className='btn' style={{ margin: "20px 5px" }}>Mobiles</Link>
            <Link className='btn' style={{ margin: "20px 5px" }}>Clothes</Link>
            <Link className='btn' style={{ margin: "20px 5px" }}>Shoes</Link>
            <Link className='btn' style={{ margin: "20px 5px" }}>Mobiles</Link>
        </div>
    )
}

export default Categories
