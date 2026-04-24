import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./components/Auth/Signup";
import Home from "./components/Home/Home";
import Login from "./components/Auth/Login";
import StudentDetails from "./components/Home/StudentDetail";
import StudentForm from "./components/Auth/StudentRegForm";
import PrivateRoute from "./components/privareRoute/PrivateRoute";
import NotFound from "./components/Utility/NotFound";

function App() {
  return (
    <>
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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
