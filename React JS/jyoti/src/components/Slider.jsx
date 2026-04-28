import React, { useState } from 'react'
import img1 from "./images/img.jpg"
import img2 from "./images/img2.jpg"
import img3 from "./images/img3.jpg"

function Slider() {

    const [sliderData, setSliderData] = useState(0)

    const img = [
        {
            id: 1,
            image: img1,
            content: "",
            button: ""
        },
        {
            id: 2,
            image: img2,
            content: ""
        },
        {
            id: 3,
            image: img3,
            content: ""
        },
    ]

    


    return (
        <>
            <h1>Slider</h1>
            <div className='slider' style={{ display: "flex" }}>
                {
                    img.map((item, i) => {
                        return (
                            <>
                                <div className={`${i === sliderData ? "slide" : "none"}`}>
                                    <img src={item.image} alt="" width={"100%"} />
                                </div>
                            </>
                        )
                    })
                }
                <button>Left</button>
                <button>Right</button>
            </div>
        </>
    )
}

export default Slider
