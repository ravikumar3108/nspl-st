import React from "react";

const ProfilePage = () => {
    const user = {
        name: "Ravi Kumar",
        email: "ravi@example.com",
        phone: "+91 9876543210",
        address: "Jaipur, Rajasthan, India",
    };

    return (
        <div className="profile-container">
            <div className="profile-card">

                <h2 className="profile-title">My Profile</h2>

                <div className="profile-image">
                    <img src="https://via.placeholder.com/100" alt="profile" />
                </div>

                <div className="profile-details">

                    <div className="profile-row">
                        <span className="label">Name:</span>
                        <span>{user.name}</span>
                    </div>

                    <div className="profile-row">
                        <span className="label">Email:</span>
                        <span>{user.email}</span>
                    </div>

                    <div className="profile-row">
                        <span className="label">Phone:</span>
                        <span>{user.phone}</span>
                    </div>

                    <div className="profile-row">
                        <span className="label">Address:</span>
                        <span className="address">{user.address}</span>
                    </div>

                    <button>Update</button>

                </div>
            </div>
        </div>
    );
};

export default ProfilePage;