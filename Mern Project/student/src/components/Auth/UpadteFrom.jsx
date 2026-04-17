import axios from "axios";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

function UpadteFrom({ detailstudent, setUpdate }) {


    const [image, setImage] = useState()
    const [stForm,setFormData] = useState()
    const [firstName, setFirstName] = useState(detailstudent?.firstname)

    console.log(stForm)
    console.log(image)


    const handleChange = (e) => {
        setFormData({ ...stForm, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        // e.preventDefault();
        // const fdata = new FormData()
        // fdata.append("firstName", stForm.firstName)
        // fdata.append("lastName", stForm.lastName)
        // fdata.append("fatherName", stForm.fatherName)
        // fdata.append("className", stForm.className)
        // fdata.append("duration", stForm.duration)
        // fdata.append("email", stForm.email)
        // fdata.append("address", stForm.address)
        // fdata.append("mobile", stForm.mobile)
        // fdata.append("image", image)

        // console.log(fdata)
        // const res = await axios.post("http://localhost:8000/registerform", fdata).then((res) => {
        //     console.log(res.data.status)
        //     if (res.data.status) {
        //         toast.success(res.data.message)
        //     } else {
        //         toast.error(res.data.message)
        //     }
        // })

    };



    return (
        <div>
            <div className="form-container">
                <div className="form-card">
                    <h2>Upadte Student</h2>

                    <form onSubmit={handleSubmit} encType="multipart/form-data">
                        <div className="row">
                            <input
                                type="text"
                                name="firstName"
                                placeholder="First Name"
                                onChange={handleChange}
                                value={firstName}
                            />
                            <input
                                type="text"
                                name="lastName"
                                placeholder="Last Name"
                                onChange={handleChange}
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

                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default UpadteFrom
