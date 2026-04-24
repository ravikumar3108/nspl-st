import React from "react";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
    const isloggin = localStorage.getItem("nsplAuth") === "true"
    return isloggin ? children : <Navigate to={"/login"} />
}

export default PrivateRoute