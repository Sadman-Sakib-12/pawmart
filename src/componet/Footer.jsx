import React from "react";
import { Link } from "react-router";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white w-full">
  
      <div className="max-w-7xl mx-auto px-6 py-12 grid gap-10 md:grid-cols-4">
 
        <div>
          <h1 className="text-emerald-500 font-bold text-3xl">PawMart</h1>
          <p className="mt-3 text-sm text-gray-300">
            PawMart connects local pet owners and buyers for adoption and pet care products.
          </p>
        </div>

        <div>
          <h6 className="font-semibold mb-3">Useful Links</h6>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link to="/" className="hover:text-emerald-400">Home</Link></li>
            <li><Link to="/about" className="hover:text-emerald-400">About</Link></li>
            <li><Link to="/blogs" className="hover:text-emerald-400">Blog</Link></li>
            <li><Link to="/support" className="hover:text-emerald-400">Help & Support</Link></li>
          </ul>
        </div>

        <div>
          <h6 className="font-semibold mb-3">Legal</h6>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link to="/privacy" className="hover:text-emerald-400">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-emerald-400">Terms & Conditions</Link></li>
          </ul>
        </div>

        <div>
          <h6 className="font-semibold mb-3">Contact</h6>
          <p className="text-sm text-gray-300">Email: sadmansakib8530@gmail.com</p>
          <p className="text-sm text-gray-300">Phone: +8801937636760</p>

          <div className="flex gap-4 mt-4 text-xl">
            <a href="#" className="hover:text-emerald-400"><FaFacebook /></a>
            <a href="#" className="hover:text-emerald-400"><FaGithub /></a>
            <a href="#" className="hover:text-emerald-400"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      
      <div className="border-t border-gray-700 py-4 text-center text-sm text-gray-400 w-full">
        © {new Date().getFullYear()} PawMart. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;