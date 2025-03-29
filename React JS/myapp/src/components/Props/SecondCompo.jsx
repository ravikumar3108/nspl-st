import React from 'react'

function SecondCompo(props) {
  return (
    <div>
      <h1>Second Compo</h1>
      {/*  data get by the props */}
      <h1>My name is {props.name}</h1>
      <h1>My age is {props.dheeraj}</h1>
    </div>
  )
}

export default SecondCompo
