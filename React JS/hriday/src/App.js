import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from "./components/Utility/Navbar";
import Home from './components/Home/Home';
import About from './components/About';
import Contact from './components/Contact';
import Props11 from './components/Props/Props11';
import More from './components/Home/More';

function App() {
  return (
    <div>
      {/* Call the function component */}
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/more' element={<More />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
