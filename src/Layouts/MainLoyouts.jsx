import React from 'react'
import Navbar from '../componet/Navbar'
import { Outlet } from 'react-router'
import Footer from '../componet/Footer'
import { Toaster } from 'react-hot-toast'

const MainLoyouts = () => {
  return (
    <div className='max-w-7xl mx-auto ' >
        <Navbar/>
        <main className='min-h-[calc(100vh-178px)]'> 
            <Outlet/>
            <Toaster position='top-right'/>
        </main>
        <Footer/>
    </div>
  )
}

export default MainLoyouts