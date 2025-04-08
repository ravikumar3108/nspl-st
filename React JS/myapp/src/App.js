// Create a function component 
import React from "react";
// import a function component
import Home from "./components/Home.jsx"
import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Header from "./components/Header.jsx";
import FirstCompo from "./components/Props/FirstCompo.jsx";
import Login from "./components/User/Login.jsx";


function App() {
  return (
    // JSX fragments
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/props" element={<FirstCompo />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}


export default App

