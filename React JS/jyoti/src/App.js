// Function Component
import React from "react";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import "./App.css";
import MoreDetails from "./components/MoreDetails";

function App() {
  return (
    // Jsx fragments
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/moredetails/:id" element={<MoreDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
