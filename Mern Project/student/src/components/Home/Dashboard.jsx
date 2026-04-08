import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Dashboard() {


    const [allStudents, setAllStudents] = useState([])
    console.log(allStudents)

    async function getStudents() {
        const res = await axios.get("http://localhost:8000/allStudents").then((res) => {
            console.log(res.data.user)
            setAllStudents(res.data.user)
        })
    }

    useEffect(() => {
        getStudents()
    }, [])



    return (
        <div className="dashboard">

            {/* HEADER */}
            <div className="header">
                <div className="logo">
                    <h2>NeuroSharp Pvt Ltd.</h2>
                    <span>Student Management System</span>
                </div>

                <div className="header-icons">
                    <i className="icon">⚙️</i>
                    <i className="icon">👤</i>
                </div>
            </div>

            {/* STATS */}
            <div className="stats">

                <div className="card">
                    <p>Search Result</p>
                    <h2>275</h2>
                </div>

                <div className="card">
                    <p>Total Students</p>
                    <h2>1375</h2>
                </div>

                <div className="card">
                    <p>Primary Students</p>
                    <h2>520</h2>
                </div>

                <div className="card">
                    <p>Middle Students</p>
                    <h2>430</h2>
                </div>

                <div className="card">
                    <p>Secondary Students</p>
                    <h2>425</h2>
                </div>

            </div>

            {/* FILTERS */}
            <div className="filters">
                <button className="add-btn">+ Add Student</button>
            </div>

            {/* TABLE */}
            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Reg Num</th>
                            <th>Grade</th>
                            <th>Gender</th>
                            <th>Age</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {allStudents.map((item) => {
                            return (
                                <>
                                    <tr>
                                        <td>{item.firstname}{item.lastname}</td>
                                        <td>{item.rollno}</td>
                                        <td>7</td>
                                        <td>Male</td>
                                        <td>12</td>
                                        <td><Link to={`studentdetails/${item._id}`}>View</Link></td>
                                    </tr>
                                </>
                            )
                        })}
                    </tbody>
                </table>
            </div>

        </div>
    );
}

export default Dashboard;