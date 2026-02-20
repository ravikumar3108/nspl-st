import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Header from "./components/utilty/Header";
import Login from "./components/utilty/Login";
import Signup from "./components/utilty/Signup";
import RecipeDetail from "./components/Home/RecipeDetail";
import { useEffect, useState } from "react";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/receipeDetails/:id" element={<RecipeDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
