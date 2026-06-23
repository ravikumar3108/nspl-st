import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import DashboardLayout from './layout/DashboardLayout'
import Products from './pages/Products'
import AddProduct from './pages/AddProduct'
import DashboardContent from './components/DashboardContent'
import ViewProduct from './pages/ViewProduct'
import EditProduct from './pages/EditProduct'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<DashboardLayout />}
          >
            <Route
              index
              element={<DashboardContent />}
            />

            <Route
              path="products"
              element={<Products />}
            />

            <Route
              path="addproduct"
              element={<AddProduct />}
            />

            <Route
              path="users"
            // element={<Users />}
            />

            <Route
              path="settings"
            // element={<Settings />}
            />

            <Route path="products/view/:id" element={<ViewProduct />} />
            <Route path="products/edit/:id" element={<EditProduct />} />

          </Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
