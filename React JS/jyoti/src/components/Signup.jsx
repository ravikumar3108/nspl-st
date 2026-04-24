import React, { useState } from 'react'

function Signup() {

    // Hooks :- 

    // UseState:- 

    // const [initialValue, setInitialValue] = useState("Jyoti")

    // function changeName() {
    //     setInitialValue("Gudiya")
    // }

    // let [counter, setCounter] = useState(0)

    // function AddValues() {
    //     setCounter(++counter)
    // }

    // 
    const [name, setName] = useState(null)
    console.log("name", name)
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()


    function getName(e) {
        // console.log(e.target.value)
        setName(e.target.value)
    }


    return (

        <>
            <div>
                {/* <h1>Signup Form {initialValue}</h1>
                <h1>Signup Form {counter}</h1> */}
                {/* <button onClick={AddValues}>Add ON</button>
                <button onClick={changeName}>Change Name</button> */}
                <form>
                    <label htmlFor="">Name</label>
                    <input type="text" name="" id="" onChange={getName} />
                    <label htmlFor="">Email</label>
                    <input type="text" name="" id="" />
                    <label htmlFor="">Password</label>
                    <input type="text" name="" id="" />
                    <button type='submit'>Submit</button>
                </form>

            </div>

        </>
    )
}

export default Signup
