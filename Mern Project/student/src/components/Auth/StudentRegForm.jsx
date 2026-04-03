import axios from "axios";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

function StudentForm() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        fatherName: "",
        className: "",
        duration: "",
        email: "",
        address: "",
        mobile: "",
    });

    console.log(formData)
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await axios.post("http://localhost:8000/registerform", formData).then((res) => {
            console.log(res.data.status)
            if (res.data.status) {
                toast.success(res.data.message)
            } else {
                toast.error(res.data.message)
            }
        })

    };

    return (
        <>
            <Toaster />
            <div className="form-container">
                <div className="form-card">
                    <h2>Student Registration</h2>

                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            <input
                                type="text"
                                name="firstName"
                                placeholder="First Name"
                                onChange={handleChange}
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

                        <div className="row">
                            <input
                                type="text"
                                name="className"
                                placeholder="Class"
                                onChange={handleChange}
                            />
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

                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>

        </>
    );
}

export default StudentForm;