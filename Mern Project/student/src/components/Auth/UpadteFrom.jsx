import axios from "axios";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

function UpadteFrom({ detailstudent, setUpdate }) {


    const [image, setImage] = useState()
    const [stForm, setFormData] = useState()
    const [firstname, setFirstName] = useState(detailstudent?.firstname)
    const [lastname, setLastName] = useState(detailstudent?.lastname)


    console.log(stForm)
    console.log(image)


    const handleChange = (e) => {
        setFormData({ ...stForm, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        const id = detailstudent?._id
        e.preventDefault()
        const res = await axios.post(`http://localhost:8000/updateStudent/${id}`, { firstname, lastname }).then((res) => {
            console.log(res)
        })

    };



    return (
        <div>
            <div className="form-container">
                <div className="form-card">
                    <h2>Upadte Student</h2>

                    <form encType="multipart/form-data">
                        <div className="row">
                            <input
                                type="text"
                                name="firstName"
                                placeholder="First Name"
                                onChange={(e) => setFirstName(e.target.value)}
                                value={firstname}
                            />
                            <input
                                type="text"
                                name="lastName"
                                placeholder="Last Name"
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </div>

                        <input
                            type="text"
                            name="fatherName"
                            placeholder="Father Name"
                            onChange={handleChange}
                        />

                        <input type="file" name="image" id="" onChange={(e) => setImage(e.target.files[0])} />

                        <div className="row">
                            <select
                                name="batch"
                                onChange={handleChange}
                            >
                                <option value="select">Select a option</option>
                                <option value="MCA">2 MCA</option>
                                <option value="BCA">BCA</option>
                                <option value="B.tech">B.tech</option>
                            </select>
                            <select
                                name="duration"
                                onChange={handleChange}
                            >
                                <option value="select">Select a option</option>
                                <option value="2 year">2 year</option>
                                <option value="3 year">3 year</option>
                                <option value="4 year">4 year</option>
                            </select>
                        </div>

                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            onChange={handleChange}
                        />

                        <textarea
                            name="address"
                            placeholder="Address"
                            onChange={handleChange}
                        ></textarea>

                        <input
                            type="tel"
                            name="mobile"
                            placeholder="Mobile Number"
                            onChange={handleChange}
                        />
                        <div>
                            <label>Gender</label> <br />

                            <label>Male</label>
                            <input type="radio" name="gender" value="Male" onChange={handleChange} />

                            <label>Female</label>
                            <input type="radio" name="gender" value="Female" onChange={handleChange} />

                            <label>Other</label>
                            <input type="radio" name="gender" value="Other" onChange={handleChange} />
                        </div>

                        <button type="submit" onClick={handleSubmit}>Upadte</button>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default UpadteFrom
