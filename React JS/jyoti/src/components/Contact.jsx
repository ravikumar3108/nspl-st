import React from 'react'
import ChildComp from './ChildComp'

function Contact() {
  return (
    <div>
      <h1>Contact</h1>
      <ChildComp name={"Jy"} age={22} />
    </div>
  )
}

export default Contact
