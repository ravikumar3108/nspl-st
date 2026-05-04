// Function Component
import React from "react";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import "./App.css";
import MoreDetails from "./components/MoreDetails";
import { CartProvider } from "react-use-cart";
import Cart from "./components/Cart";

function App() {
  return (
    // Jsx fragments
    <>
      <CartProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/moredetails/:id" element={<MoreDetails />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
