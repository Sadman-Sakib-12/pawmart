import React from 'react'
import { FaBoxOpen, FaChartBar, FaShoppingCart } from 'react-icons/fa'
import { Link, NavLink } from 'react-router'
const UserMenu = () => {
    const isActive = (path) => {
    return location.pathname.startsWith(path)
      ? 'bg-primary text-white hover:bg-primary-focus shadow-lg'
      : 'hover:bg-base-200 hover:text-primary hover:shadow-md';
  };
    return (
        <div className=' '>
            <aside className=''>
                <div>
                 <h1>user</h1>
                    <nav className='mt-6'>
                        <ul>
                            <li>
                                <Link
                                    to="/dashboard/my-listing"
                                    className={`flex items-center gap-5 px-6 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 ${isActive('/dashboard/my-listings')}`}
                                >
                                    <FaBoxOpen className="text-2xl" />
                                    <span>My Listings</span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/dashboard/add-listing"
                                    className={`flex items-center gap-5 px-6 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 ${isActive('/dashboard/my-listings')}`}
                                >
                                    <FaBoxOpen className="text-2xl" />
                                    <span>Add Listing</span>
                                </Link>
                            </li>


                            <li>
                                <Link
                                    to="/dashboard/my-orderes"
                                    className={`flex items-center gap-5 px-6 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 ${isActive('/dashboard/my-orders')}`}
                                >
                                    <FaShoppingCart className="text-2xl" />
                                    <span>My Orders</span>
                                </Link>
                            </li>

                         
                        </ul>
                    </nav>
                </div>


            </aside>
        </div>
    )
}
export default UserMenu