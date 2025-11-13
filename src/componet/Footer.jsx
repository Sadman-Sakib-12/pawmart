import React from 'react'
import { Link } from 'react-router';

const Footer = () => {
  return (
    <div className=''>

      <footer className="footer bg-black text-white sm:footer-horizontal h-45  p-10">

        <aside className=' gap-5'>
          <h1 className='text-emerald-700 font-bold text-4xl'>PawMart</h1>
          <p>
            PawMart connects local pet owners <br />and buyers for adoption <br />and pet care products.
          </p>
        </aside>
        <nav className='ml-98 text-center'>
          <h6 className="footer-title to-white">Useful Links</h6>
          <Link className="link link-hover">Home</Link>
          <Link className="link link-hover">Contact</Link>
          <Link className="link link-hover">Terms</Link>
        </nav>


      </footer>
      <footer className="footer bg-black sm:footer-horizontal footer-center text-white p-4">
        <aside>
          <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
        </aside>
      </footer>
    </div>
  )
}

export default Footer;