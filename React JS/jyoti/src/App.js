// Function Component
import React, { useState } from "react";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import "./App.css";
import MoreDetails from "./components/MoreDetails";
import { CartProvider } from "react-use-cart";
import Cart from "./components/Cart";
import UserContext from "./components/UserContext";
import Login from "./components/Login";
import CreateProducts from "./components/CreateProducts";
import Details from "./components/Details";

function App() {
  const [data, setData] = useState("Jyoti");

  return (
    // Jsx fragments
    <>
      <UserContext.Provider value={{ data, setData }}>
        <CartProvider>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/addproduct" element={<CreateProducts />} />
              <Route path="/moredetails/:id" element={<MoreDetails />} />
              <Route path="/backend/:id" element={<Details />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </UserContext.Provider>
    </>
  );
}

export default App;
