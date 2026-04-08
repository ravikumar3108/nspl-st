import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const StudentDetails = () => {

    const { id } = useParams()
    console.log(id)
    let [detailstudent, setDetailStudent] = useState({})
    console.log(detailstudent.firstname)

    async function getStudents() {
        const res = await axios.get("http://localhost:8000/allStudents")
        console.log(res.data.user)
        const studentdata = res.data.user
        const findStudent = await studentdata.find((item) => item._id == id)
        setDetailStudent(findStudent)
        console.log(findStudent)
    }
    useEffect(() => {
        getStudents()
    }, [])



   

    return (
        <div className="container">
            <div className="card">
                <div className="profile-section">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                        alt="profile"
                        className="profile-img"
                    />
                    <h2>
                        {detailstudent?.firstname} {detailstudent?.lastname}
                    </h2>
                    <p className="class">{detailstudent?.className}</p>
                </div>

                <div className="details-grid">
                    <div>
                        <label>Father Name</label>
                        <p>{detailstudent?.fathername}</p>
                    </div>

                    <div>
                        <label>Duration</label>
                        <p>{detailstudent?.duration}</p>
                    </div>

                    <div>
                        <label>Email</label>
                        <p>{detailstudent?.email}</p>
                    </div>

                    <div>
                        <label>Mobile</label>
                        <p>{detailstudent?.mobile}</p>
                    </div>

                    <div className="full-width">
                        <label>Address</label>
                        <p>{detailstudent?.address}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentDetails;