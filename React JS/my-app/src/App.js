import "./App.css";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Datasend from "./components/Props/Datasend";

function App() {
  return (
    // JSX Fragments
    <>
      {/* Call the funtion components */}
      {/* Reusable */}
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/props" element={<Datasend />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
