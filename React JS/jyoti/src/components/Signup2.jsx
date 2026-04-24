import React, { useState } from 'react'

function Signup2() {


    const [allData, setAllData] = useState()

    console.log(allData)

    function getValue(e) {
        setAllData({
            // spread operator 
            ...allData,
            [e.target.name]: e.target.value
        })
    }

    // JSON :- Javasxript object notation.
    // JSON.stringify :- convert js object into json obj 


    function handleSubmit(e) {
        e.preventDefault()
        const saveuser = localStorage.setItem("jyoti", JSON.stringify(allData))
    }



    return (
        <div>
            {allData?.name}
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Name</label>
                <input type="text" name="name" id="" onChange={getValue} />
                <label htmlFor="">Email</label>
                <input type="text" name="email" id="" onChange={getValue} />
                <label htmlFor="">Password</label>
                <input type="text" name="password" id="" onChange={getValue} />
                <button type='submit'>Submit</button>
            </form>

        </div>
    )
}

export default Signup2
