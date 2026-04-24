import React from 'react'
import Header from './Header'
import image from "./images/img.jpg"
import ChildComp from './ChildComp'
import Signup from './Signup'
import Signup2 from './Signup2'

function Home() {

    let x = 10
    let name = "Jyoti"

    // Props :- send data one component to another components
    return (
        <div style={{ paddingTop: "10px" }}>
            <h1>Home Componenet {name}</h1>

            {/* <Signup /> */}
            <Signup2/>

            {/* <img src={image} alt="" width={"50%"} height={"500px"} /> */}

            {/* Send a props :-  */}
            {/* <div>
                <ChildComp name={name} age={x} />
                <ChildComp name={"Gudiya"} age={x} />
                <ChildComp name={"Rajni"} age={x} />
                <ChildComp name={name} age={x} />
            </div> */}
        </div>
    )
}

export default Home
