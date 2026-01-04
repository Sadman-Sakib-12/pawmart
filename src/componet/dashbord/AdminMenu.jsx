import React from 'react'
import { FaBan, FaBoxOpen, FaChartBar, FaFlag, FaShoppingCart, FaUsers } from 'react-icons/fa'
import { Link, NavLink } from 'react-router'
const AdminMenu = () => {

    return (
        <div className=' '>
            <aside className=''>
                <div>
                    <h1>Admin </h1>
                    <nav className='mt-6'>
                        <ul>
                            <li><NavLink to="/dashboard/manageuser"
                                  className={({ isActive }) =>
                                `flex items-center gap-5 px-6 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 ${isActive ? "bg-primary text-white" : "hover:bg-base-200"}`}><FaUsers /> Manage Users</NavLink></li>
                            <li><NavLink to="/dashboard/allproducts"
                                  className={({ isActive }) =>
                                `flex items-center gap-5 px-6 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 ${isActive ? "bg-primary text-white" : "hover:bg-base-200"}`} ><FaBoxOpen /> All Products</NavLink></li>
                            <li>
                                <NavLink
                                    to="/dashboard/salesanalytics"
                                      className={({ isActive }) =>
                                `flex items-center gap-5 px-6 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 ${isActive ? "bg-primary text-white" : "hover:bg-base-200"}`}
                                >
                                    <FaChartBar className="text-2xl" />
                                    <span>Sales Analytics</span>
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </aside>
        </div>
    )
}
export default AdminMenu