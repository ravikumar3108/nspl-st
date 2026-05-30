import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./components/Auth/Signup";
import Home from "./components/Home/Home";
import Login from "./components/Auth/Login";
import StudentDetails from "./components/Home/StudentDetail";
import StudentForm from "./components/Auth/StudentRegForm";
import PrivateRoute from "./components/privareRoute/PrivateRoute";
import NotFound from "./components/Utility/NotFound";
import ProfilePage from "./components/Auth/Profile";
import StudentContext from "./components/context/StudentContext";
import { useState } from "react";
import { AuthUserContext } from "./components/context/UserContext";

function App() {
  const [student, setStudent] = useState("jyoti");

  return (
    <>
      <AuthUserContext>
        <StudentContext value={student}>
          <BrowserRouter>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="*" element={<NotFound />} />
              <Route
                path="/"
                element={
                  <PrivateRoute>
                    <Home />
                  </PrivateRoute>
                }
              />

              <Route
                path="/studentregform"
                element={
                  <PrivateRoute>
                    <StudentForm />
                  </PrivateRoute>
                }
              />
              <Route
                path="/studentdetails/:id"
                element={
                  <PrivateRoute>
                    <StudentDetails />
                  </PrivateRoute>
                }
              />
              <Route
                path="/profile"
                element={
                  <PrivateRoute>
                    <ProfilePage />
                  </PrivateRoute>
                }
              />
            </Routes>
          </BrowserRouter>
        </StudentContext>
      </AuthUserContext>
    </>
  );
}

export default App;
