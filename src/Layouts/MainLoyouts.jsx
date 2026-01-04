import React from 'react';
import Navbar from '../componet/Navbar';
import Footer from '../componet/Footer';
import { Outlet } from 'react-router';
import { Toaster } from 'react-hot-toast';

const MainLoyouts = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-base-100">
        <header>
          <Navbar />
        </header>

        <main className="flex-1">
          <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
            <Outlet />
            <Toaster position='top-right' />
          </div>
        </main>  
        <Footer />
      </div>
    </>
  );
};

export default MainLoyouts;