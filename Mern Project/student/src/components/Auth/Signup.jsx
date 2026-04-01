import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
    const [formData, setFormData] = useState();
    console.log(formData)

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Step :- Check the api. 
        const senddata = await axios.post("http://localhost:8000/signup", formData).then((res) => {
            console.log(res)
        })
    };

    return (
        <div className="signup-container">
            <div className="signup-card">
                <h2>Signup</h2>

                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        onChange={handleChange}
                        required
                    />

                    <button type="submit">Signup</button>
                    <p className="signup-text">
                        Already an account? <Link to={"/login"}>Login</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Signup;