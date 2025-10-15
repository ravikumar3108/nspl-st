import React from 'react'

function Data(props) {

    console.log(props)
    console.log(props.name)

    return (
        <div>
            <h1>Data Componets</h1>
            <h2>My name is {props.name}</h2>
        </div>
    )
}

export default Data
