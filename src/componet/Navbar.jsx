import React, { useContext, useEffect, useState } from "react";
import { NavLink, Link } from "react-router";
import { FaSignOutAlt, FaTachometerAlt, FaMoon, FaSun } from "react-icons/fa";
import useAuth from "../hooks/useAuth";

const Navbar = () => {
    const { user, signoutUserFunc } = useAuth()
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => setTheme(prev => (prev === "light" ? "dark" : "light"));


    return (
        <div className="navbar bg-base-100 shadow-lg fixed top-0 left-0 right-0 z-50">


            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-4 shadow bg-base-100 rounded-box w-64 gap-1">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `px-4 py-2 rounded-xl transition-all ${isActive ? "bg-primary text-white" : "hover:bg-base-200"}`}
                        >Home</NavLink>
                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                `px-4 py-2 rounded-xl transition-all ${isActive ? "bg-primary text-white" : "hover:bg-base-200"}`}
                        >About</NavLink>
                        <NavLink to="/blog"
                            className={({ isActive }) =>
                                `px-4 py-2 rounded-xl transition-all ${isActive ? "bg-primary text-white" : "hover:bg-base-200"}`}>Blog</NavLink>
                        <NavLink to="/support"
                            className={({ isActive }) =>
                                `px-4 py-2 rounded-xl transition-all ${isActive ? "bg-primary text-white" : "hover:bg-base-200"}`}>Support</NavLink>
                        {user && (
                            <>
                                <NavLink to="/pets-supplies"
                                    className={({ isActive }) =>
                                        `px-4 py-2 rounded-xl transition-all ${isActive ? "bg-primary text-white" : "hover:bg-base-200"}`}>Pet Supplies</NavLink>
                                <NavLink to="/dashboard"
                                    className={({ isActive }) =>
                                        `px-4 py-2 rounded-xl transition-all ${isActive ? "bg-primary text-white" : "hover:bg-base-200"}`}><FaTachometerAlt /> Dashboard</NavLink>
                            </>
                        )}
                    </ul>
                </div>


                <Link to="/" className="btn btn-ghost text-2xl md:text-3xl font-bold text-primary normal-case">
                    PawMart
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-lg font-medium gap-2">

                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `px-4 py-2 rounded-xl transition-all ${isActive ? "bg-primary text-white" : "hover:bg-base-200"}`
                        }
                    >
                        Home
                    </NavLink>
                    {user && (
                        <NavLink
                            to="/pets-supplies"
                            className={({ isActive }) =>
                                `px-4 py-2 rounded-xl transition-all ${isActive ? "bg-primary text-white" : "hover:bg-base-200"}`
                            }
                        >
                            Pet Supplies
                        </NavLink>
                    )}
                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            `px-4 py-2 rounded-xl transition-all ${isActive ? "bg-primary text-white" : "hover:bg-base-200"}`
                        }
                    >
                        About
                    </NavLink>
                    <NavLink
                        to="/blog"
                        className={({ isActive }) =>
                            `px-4 py-2 rounded-xl transition-all ${isActive ? "bg-primary text-white" : "hover:bg-base-200"}`
                        }
                    >
                        Blog
                    </NavLink>
                    <NavLink
                        to="/support"
                        className={({ isActive }) =>
                            `px-4 py-2 rounded-xl transition-all ${isActive ? "bg-primary text-white" : "hover:bg-base-200"}`
                        }
                    >
                        Support
                    </NavLink>


                </ul>
            </div>
            <div className="navbar-end gap-3">

                <label className="swap swap-rotate btn btn-ghost btn-circle">
                    <input type="checkbox" onChange={toggleTheme} checked={theme === "dark"} />
                    <FaSun className="swap-on fill-current w-6 h-6 text-yellow-500" />
                    <FaMoon className="swap-off fill-current w-6 h-6 text-blue-700" />
                </label>

                {user ? (
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={user.photoURL || "https://i.ibb.co/0jZJ7Yk/default-avatar.jpg"} alt="User Avatar" referrerPolicy="no-referrer" />
                            </div>
                        </div>
                        <ul tabIndex={0} className="menu dropdown-content mt-3 z-50 p-4 shadow bg-base-100 rounded-box w-64">
                            <li className="menu-title text-center pb-3 border-b">
                                <div className="flex flex-col items-center gap-2">
                                    <div className="avatar">
                                        <div className="w-16 rounded-full ring ring-primary ring-offset-2">
                                            <img
                                                src={user.photoURL || 'https://i.ibb.co/0jZJ7Yk/default-avatar.jpg'}
                                                alt="User Avatar"
                                                className="object-cover"
                                            />

                                        </div>
                                    </div>
                                    <div>
                                        <p className="font-bold text-lg">{user.displayName || "User"}</p>
                                        <p className="text-sm text-base-content/70">{user.email}</p>
                                    </div>
                                </div>
                            </li>
                            <li className="mt-3">
                                <NavLink to="/dashboard" className="btn btn-primary w-full gap-3 text-lg font-medium">
                                    <FaTachometerAlt /> Go to Dashboard
                                </NavLink>
                            </li>
                            <li className="mt-2">
                                <button onClick={signoutUserFunc} className="btn btn-error btn-outline w-full gap-3 text-lg font-medium">
                                    <FaSignOutAlt /> Logout
                                </button>
                            </li>
                        </ul>
                    </div>
                ) : (
                    <>
                        <Link to="/login" className="btn btn-outline btn-primary px-6">Login</Link>
                        <Link to="/regiter" className="btn btn-primary px-6">Register</Link>
                    </>
                )}
            </div>
        </div>
    );
};

export default Navbar;
