import React, { use } from 'react'
import { NavLink } from 'react-router'
import { Link } from 'react-router'
import { AuthContext } from '../context/AuthContext'

const Navbar = () => {
    const { user, signoutUserFunc } = use(AuthContext)
    return (
        <div className="navbar bg-green-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[999] mt-3 w-52 p-2 shadow">
                        <li>  <NavLink to='/'  className={({ isActive }) => isActive ? "bg-green-700" : "hover:text-emerald-700"}>Home</NavLink></li>
                        <li>
                            <NavLink to='/pets-supplies'  className={({ isActive }) => isActive ? "bg-green-700" : "hover:text-emerald-700"}>Pets Supplies</NavLink>
                        </li>
                        {user && (
                            <>
                                <li>
                                    <NavLink to='/add-listing'  className={({ isActive }) => isActive ? "bg-green-700" : "hover:text-emerald-700"}>Add Listing</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/my-listing'  className={({ isActive }) => isActive ? "bg-green-700" : "hover:text-emerald-700"}>My Listings</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/my-orderes'  className={({ isActive }) => isActive ? "bg-green-700" : "hover:text-emerald-700"}>My Orders</NavLink>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
                <a className=" text-emerald-600 font-bold text-4xl">PawMart</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-bold">
                    <li><NavLink to='/'  className={({ isActive }) => isActive ? "bg-green-700" : "hover:text-emerald-700"}>Home</NavLink></li>
                    <li>
                        <NavLink to='/pets-supplies'  className={({ isActive }) => isActive ? "bg-green-700" : "hover:text-emerald-700"}>Pets Supplies</NavLink>
                    </li>
                    {user && (
                        <>
                            <li>
                                <NavLink to='/add-listing'  className={({ isActive }) => isActive ? "bg-green-700" : "hover:text-emerald-700"}>Add Listing</NavLink>
                            </li>
                            <li>
                                <NavLink to='/my-listing'  className={({ isActive }) => isActive ? "bg-green-700" : "hover:text-emerald-700"}>My Listings</NavLink>
                            </li>
                            <li className=''>
                                <NavLink to='/my-orderes'  className={({ isActive }) => isActive ? "bg-green-700" : "hover:text-emerald-700"}>My Orders</NavLink>
                            </li>
                        </>
                    )}
                </ul>
            </div>

            <div className='navbar-end gap-3'>
                {
                    user ? (
                        <div className='dropdown dropdown-end z-50'>
                            <div tabIndex={0}
                                role='button'
                                className='btn btn-ghost btn-circle avatar'>
                                <div className='w-9 border-2 border-gray-300 rounded-full'>
                                    <img src={user.photoURL || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"} alt=""
                                        referrerPolicy='no-referrer' />
                                </div>
                            </div>
                            <ul
                                tabIndex="-1"
                                className='menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow'>
                                <div className='pb-3 border-b border-b-gray-200'>
                                    <li className='text-sm font-bold'>{user.displayName}</li>
                                    <li className='text-xs'>{user.email}</li>
                                </div>
                                <li>
                                    <button onClick={signoutUserFunc} className='btn btn-xs text-left bg-linear-to-r from-pink-500 to-red-500 text-white'>
                                        Logout
                                    </button>
                                </li>
                            </ul>
                        </div>
                    ) : (
                        <div className="navbar-end">
                            <Link className='btn bg-fuchsia-500 hover:bg-lime-500 text-white' to='/login'>Login</Link>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Navbar