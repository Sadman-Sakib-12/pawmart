import React from 'react'
import { FaBan, FaBoxOpen, FaChartBar, FaFlag, FaShoppingCart, FaUsers } from 'react-icons/fa'
import { Link, NavLink } from 'react-router'
const AdminMenu = () => {
    const isActive = (path) => {
        return location.pathname.startsWith(path)
            ? 'bg-primary text-white hover:bg-primary-focus shadow-lg'
            : 'hover:bg-base-200 hover:text-primary hover:shadow-md';
    };
    return (
        <div className=' '>
            <aside className=''>
                <div>
                    <h1>Admin </h1>
                    <nav className='mt-6'>
                        <ul>
                            <li><Link to="/dashboard/manageuser"
                                className={`flex items-center gap-5 px-6 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 ${isActive('/dashboard/analytics')}`}><FaUsers /> Manage Users</Link></li>
                            <li><Link to="/dashboard/allproducts"
                                className={`flex items-center gap-5 px-6 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 ${isActive('/dashboard/analytics')}`} ><FaBoxOpen /> All Products</Link></li>
                            <li>
                                <Link
                                    to="/dashboard/salesanalytics"
                                    className={`flex items-center gap-5 px-6 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 ${isActive('/dashboard/analytics')}`}
                                >
                                    <FaChartBar className="text-2xl" />
                                    <span>Sales Analytics</span>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>


            </aside>
        </div>
    )
}
export default AdminMenu