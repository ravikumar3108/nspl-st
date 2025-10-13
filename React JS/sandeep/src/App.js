import logo from './logo.svg';
import './App.css';
import Home from "./components/Home"
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';

function App() {

  return (
    <>
      {/* JSX fragments  */}


      {/* Call the function component */}

      {/* <Home /> */}


      {/* Routing :- npm  */}

      <BrowserRouter>
        <Header />
        
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>

      </BrowserRouter>


    </>
  );
}

export default App;
