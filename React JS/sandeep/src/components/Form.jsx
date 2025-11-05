import React, { useState } from 'react'

function Form() {

    let [firstname , setFirstname] = useState()
    console.log("firstname",firstname)

    function getFirstName(e){
        // console.log(e)
        setFirstname(e.target.value)
    }

    let [email , setEmail] = useState()
    console.log("email",email)
    function getEmail(e){
        setEmail(e.target.value)
    }

  return (
    <>

        <form action="">
            <label htmlFor="">FirstName</label> <br />
            <input type="text" name="" id="" onChange={getFirstName}/> <br /> <br />
            <label htmlFor="">Lastname</label> <br />
            <input type="text" name="" id="" /> <br /> <br />
            <label htmlFor="">Email</label> <br />
            <input type="text" name="" id="" onChange={getEmail}/> <br /> <br />

            <button type='submit'>Submit</button>
        </form>


    </>
  )
}

export default Form
