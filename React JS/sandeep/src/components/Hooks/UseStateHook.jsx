import React, { useState } from 'react'


function UseStateHook() {

    let x = 19
    let y = "sandeep"
    y = "kumar"

    // firstname :- initial value 
    // setFirstName :- setvalue

    let [firtsname , setFirstName] = useState("Sandeep Kumar")

    function ChangeName(){
        console.log("function i srun")
        setFirstName("Ravi Kumar")
    }

    // counter 

    let [counter , setCounter ] = useState(0)

    function addValues(){
        setCounter(++counter)
    }
    function subtar(){
        setCounter(--counter)
    }

    return (
    <>
      <h1>My name is {firtsname}</h1>
      <button onClick={ChangeName}>Chnage the name</button>

        <h1>{counter}</h1>
        <button onClick={addValues}>Add</button>
        <button onClick={subtar}>Subtract</button>

    </>
  )
}

export default UseStateHook
