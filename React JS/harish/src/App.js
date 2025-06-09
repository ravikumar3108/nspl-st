import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
// Import the function component
import Home from "./components/Home"
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;

