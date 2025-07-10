import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
// Import the function component
import Home from "./components/Home"
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Stat from './components/Hooks/Stat';
import Api from './components/Api';
import More from './components/More';
import { CartProvider } from 'react-use-cart';
import Cart from './components/Products/Cart';

function App() {
  return (
    <>

      <BrowserRouter>
        <CartProvider>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/signup' element={<Stat />} />
            <Route path='/' element={<Home />} />
            <Route path='/api' element={<Api />} />
            <Route path='/more' element={<More />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>

    </>
  );
}

export default App;

