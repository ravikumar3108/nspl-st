import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import UpadteFrom from "../Auth/UpadteFrom";

const StudentDetails = () => {

    const Navigate = useNavigate()
    const { id } = useParams()
    console.log(id)
    let [detailstudent, setDetailStudent] = useState({})
    console.log(detailstudent)
    const [update, setUpdate] = useState(null)

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

    async function deleteStudent(id) {
        console.log("delete", id)
        const res = await axios.delete(`http://localhost:8000/deleteStudent/${id}`)
        if (res.data.status) {
            Navigate("/")
        }
    }


    return (
        <div className="container">
            <div className="card">
                <div className="profile-section">
                    <img
                        src={`data:image/;base64,${btoa(
                            String.fromCharCode(
                                ...new Uint8Array(detailstudent?.image?.data?.data || "")
                            )
                        )}`}
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

                    <button onClick={() => deleteStudent(detailstudent?._id)}>
                        Delete a Student
                    </button>
                    <button onClick={() => setUpdate(true)}>
                        Update
                    </button>
                    {
                        update == true ? <UpadteFrom detailstudent={detailstudent} setUpdate={setUpdate} /> : ""
                    }
                </div>
            </div>
        </div>
    );
};

export default StudentDetails;