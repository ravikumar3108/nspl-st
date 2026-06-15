import React, { useContext } from 'react'
import Login from './Login'
import UserContext from './UserContext'

function About() {

  const { data, setdata } = useContext(UserContext)

  return (
    <div>
      <h1>About</h1>
      {data}
    </div>
  )
}

export default About
