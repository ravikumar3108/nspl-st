import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './features/Login'
import Signup from './features/Signup'
import Home from './pages/Home'
import CategoryPage from './pages/CategoryPage'
import ProductDetails from './pages/ProductDetails'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/ShopSphere' element={<Home />} />
          <Route
            path="/category/:slug"
            element={<CategoryPage />}
          />
          <Route
            path="/product/:id"
            element={<ProductDetails />}
          />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
