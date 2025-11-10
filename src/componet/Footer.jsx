import React from 'react'
import { Link } from 'react-router';

const Footer = () => {
  return (
    <div>

      <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">

        <aside className='flex gap-5'>
          <h1 className='text-4xl'>PawMart</h1>
          <p>
            PawMart connects local pet owners <br />and buyers for adoption <br />and pet care products.
          </p>
        </aside>
        <nav className='ml-98 text-center'>
          <h6 className="footer-title">Useful Links</h6>
          <Link className="link link-hover">Home</Link>
          <Link className="link link-hover">Contact</Link>
          <Link className="link link-hover">Terms</Link>
        </nav>


      </footer>
      <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
        <aside>
          <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
        </aside>
      </footer>
    </div>
  )
}

export default Footer;