import axios from 'axios'
import React, { useState } from 'react'

function CreateProducts() {

    const [allData, setAllData] = useState()


    function getValue(e) {
        setAllData(
            {
                ...allData,
                [e.target.name]: e.target.value
            }
        )
    }


    async function handleSubmit(e) {
        e.preventDefault()
        const res = await axios.post("http://localhost:8000/api/product/createProduct", allData).then((res) => {
            console.log(res)
        })
    }

    return (
        <>
            <h1 style={{ textAlign: "center", marginTop: "50px" }}>Add Products</h1>
            <div className='add-form'>
                <form action="" className='form' onSubmit={handleSubmit}>
                    <div className='input-box'>
                        <label htmlFor="">Title</label> <br />
                        <input type="text" name="title" id="" onChange={getValue} />
                    </div>
                    <div className='input-box'>
                        <label htmlFor="">Description</label> <br />
                        <input type="text" name="description" id="" onChange={getValue} />
                    </div>
                    <div className='input-box'>
                        <label htmlFor="">Price</label> <br />
                        <input type="text" name="price" id="" onChange={getValue} />
                    </div>
                    <div className='input-box'>
                        <label htmlFor="">Category</label> <br />
                        <select name="category" id="" className='category-box' onChange={getValue}>
                            <option value="clothe">Clothes</option>
                            <option value="shoes">Shoes</option>
                            <option value="mobiles">Mobiles</option>
                            <option value="clothe">Clothes</option>
                        </select>
                    </div> <br />
                    <button type='submit' className='btn'>Add Product</button>
                </form>

            </div>
        </>
    )
}

export default CreateProducts
