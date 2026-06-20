import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Layout({ children }) {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    )
}

export default Layout
