import React from 'react'
import Navbar from '../componet/Navbar'
import { Outlet } from 'react-router'
import Footer from '../componet/Footer'

const MainLoyouts = () => {
  return (
    <div className='max-w-7xl mx-auto' >
        <Navbar/>
        <main className='max-w-7xl mx-auto'> 
            <Outlet/>
        </main>
        <Footer/>
    </div>
  )
}

export default MainLoyouts