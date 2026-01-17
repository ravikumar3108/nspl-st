import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Form from "./components/Form";
import Details from "./components/Details";
import { CartProvider } from "react-use-cart";
import Cart from "./components/Cart";
import Signup from "./components/Nodejs/Signup";
import CreateProduct from "./components/Nodejs/CreateProducts";
import BackCart from "./components/Nodejs/BackCart";

function App() {
  return (
    <>
      {/* JSX fragments  */}

      {/* Call the function component */}

      {/* <Home /> */}

      {/* Routing :- npm  */}

      <BrowserRouter>
        <CartProvider>
          <Header />

          <Routes>
            {/* <Route path="/about" element={<About />} /> */}
            {/* <Route path="/contact" element={<Contact />} /> */}
            {/* <Route path="/form" element={<Form />} /> */}
            {/* <Route path="/details/:id" element={<Details />} /> */}
            {/* <Route path="/cart" element={<Cart />} /> */}
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />

            {/* Backend */}

            <Route path="/createProduct" element={<CreateProduct />} />
            <Route path="/cart" element={<BackCart />} />


          </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
