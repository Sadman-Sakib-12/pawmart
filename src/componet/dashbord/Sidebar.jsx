
import React from 'react';
import { Link, useLocation } from 'react-router';
import {
    FaHome, FaSignOutAlt, FaCog
} from 'react-icons/fa';
import UserMenu from './UserMenu';
import useAuth from '../../hooks/useAuth';
import AdminMenu from './adminmenu';
import useRole from '../../hooks/useRole';

const Sidebar = () => {
    const location = useLocation();
    const [role] = useRole()
    const { user, signoutUserFunc } = useAuth()

    const isActive = (path) => {
        return location.pathname.startsWith(path)
            ? 'bg-primary text-white hover:bg-primary-focus shadow-lg'
            : 'hover:bg-base-200 hover:text-primary hover:shadow-md';
    };



    return (
        <aside className="w-80 min-h-screen bg-base-100 shadow-2xl flex flex-col border-r border-base-300">
            {/* Logo Section */}
            <div className="p-8 border-b border-base-300">
                <Link to="/" className="flex items-center gap-5">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center text-white text-3xl font-black shadow-xl">
                        PM
                    </div>
                    <div>
                        <h2 className="text-3xl font-black text-primary">PawMart</h2>
                        <p className="text-sm text-base-content/60 mt-1">Dashboard</p>
                    </div>
                </Link>
            </div>


            <nav className="flex-1 py-8 px-6 overflow-y-auto">
                <ul className="space-y-3">

                    <li>
                        <Link
                            to="/dashboard/overview"
                            className={`flex items-center gap-5 px-6 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 ${isActive('/dashboard/overview')}`}
                        >
                            <FaHome className="text-2xl" />
                            <span>Dashboard Overview</span>
                        </Link>
                    </li>
                    <ul>
                        {role === "user" && <UserMenu />}
                        {role === "admin" && <AdminMenu />}
                    </ul>



                </ul>
            </nav>


            <div className="border-t border-base-300 p-6">
                <div className="bg-gradient-to-br from-base-200 to-base-100 rounded-2xl p-6 shadow-inner mb-4">
                    <div className="flex items-center gap-4 mb-4">

                        <li>
                            <Link
                                to="/dashboard/profilesettings"
                                className={`flex items-center gap-5 px-6 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 ${isActive('/dashboard/profile')}`}
                            >
                                <FaCog className="text-2xl" />
                                <span>Profile Settings</span>
                            </Link>
                        </li>
                    </div>
                </div>


                <button
                    onClick={signoutUserFunc}
                    className="flex items-center justify-center gap-4 px-6 py-4 rounded-2xl font-bold text-lg text-error hover:bg-error/10 hover:shadow-lg transition-all duration-300 w-full border border-error/30"
                >
                    <FaSignOutAlt className="text-2xl" />
                    <span>Logout</span>
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;