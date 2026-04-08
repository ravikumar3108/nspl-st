import "./App.css";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Datasend from "./components/Props/Datasend";
import Login from "./components/Login";
import ProductDetail from "./components/Details";
import Cart from "./components/Cart";
import { CartProvider } from "react-use-cart";

function App() {
  return (
    // JSX Fragments
    <>
      {/* Call the funtion components */}
      {/* Reusable */}
      <BrowserRouter>
        <CartProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/props" element={<Datasend />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/details/:id" element={<ProductDetail />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
