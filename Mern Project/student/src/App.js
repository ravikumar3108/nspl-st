import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./components/Auth/Signup";
import Home from "./components/Home/Home";
import Login from "./components/Auth/Login";
import StudentDetails from "./components/Home/StudentDetail";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/studentdetails/:id" element={<StudentDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
