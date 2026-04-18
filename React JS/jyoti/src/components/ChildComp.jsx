import React from 'react'
import Login from './Login';
import image from "./images/img.jpg"


function ChildComp({ name, age }) {

    return (
        <>
           
                <div className='card'>
                    <div style={{
                        width: "40%"
                    }}>
                        < img src={image} alt="" width={"100%"} />
                    </div>
                    <h1>Title : {name}</h1>
                    <p>Description : {age}</p>
                </div>
        </>
    )
}

export default ChildComp;
