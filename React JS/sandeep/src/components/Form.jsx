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

    let [allData, setAllData] = useState()
    console.log("alldata",allData)

    function getAllData(e){
        setAllData({
            // spread operator 
            ...allData,
            [e.target.name] : e.target.value
        })
    }

    // Json Object :- javascript object notation

    // let obj = {
    //     "name":"sandeep",
    //     "id":1
    // }


    function handleSubmit(e){
        e.preventDefault()
        console.log("submit function call")
        localStorage.setItem("users",JSON.stringify(allData));
        
    }


  return (
    <>
        <form action="" onSubmit={handleSubmit}>
            <label htmlFor="">FirstName</label> <br />
            <input type="text" name="firstname" id="" onChange={getAllData}/> <br /> <br />
            <label htmlFor="">Lastname</label> <br />
            <input type="text" name="lastname" id="" onChange={getAllData}/> <br /> <br />
            <label htmlFor="">Email</label> <br />
            <input type="text" name="email" id="" onChange={getAllData}/> <br /> <br />
            <select name="gender" id="" onChange={getAllData}>
                <option value="1">Male</option>
                <option value="2">Female</option>
                <option value="3">Others</option>
                <option value="4">4</option>
            </select>
            <button type='submit'>Submit</button>
        </form>


    </>
  )
}

export default Form
