import React, { useState } from 'react'
import { sliderdata } from './Data/SilderData'
import { FaChevronLeft } from "react-icons/fa";

function Slider() {

    const [slider, setSlider] = useState(2)


    function leftButton() {
        setSlider(slider - 1)
        if (slider == 0) {
            setSlider(2)
        }

    }
    function rightButton() {
        setSlider(slider + 1)
        if (slider == 2) {
            setSlider(0)
        }

    }

    // Ternary operators :- 
    // condition ? true : false 

    return (
        <>

            <div className='slider' style={{ display: "flex" }}>
                {sliderdata.map((item, i) => {
                    return (
                        <>
                            <div className={i == slider ? "slider" : "none"}>
                                <img src={item.image} alt="" width={"100%"} />
                                <h2>{item.text}</h2>
                            </div>

                        </>
                    )
                })}
                <button onClick={rightButton}>Right</button>
                <button onClick={leftButton}><FaChevronLeft />left</button>
            </div>

        </>
    )
}

export default Slider
