import React from 'react'
import Data from './Data'
import AboutChild from './AboutChild'

function About() {
    let x = "Ravi"
    return (
        <div>
            <h1>About Component</h1>
            <AboutChild name={x} />
        </div>
    )
}

export default About
