import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { FaUserCheck, FaUserTimes, FaUserShield, FaTrashAlt, FaSearch } from 'react-icons/fa';

const ManageUsers = ({ currentUserEmail }) => { 
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await fetch('https://pawmart-server-gray.vercel.app/users');
      const data = await res.json();
      setUsers(data);
      setLoading(false);
    } catch (err) {
      toast.error('Failed to load users');
      setLoading(false);
    }
  };

  const handleMakeAdmin = async (userId) => {
    try {
      const res = await fetch(`https://pawmart-server-gray.vercel.app/users/${userId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ role: 'admin' })
      });
      if (res.ok) {
        toast.success('User promoted to Admin! ');
        fetchUsers();
      }
    } catch (err) {
      toast.error('Failed to update role');
    }
  };

  const handleDeleteUser = async (userId) => {
    if (!window.confirm('Are you sure you want to delete this user?')) return;
    try {
      const res = await fetch(`https://pawmart-server-gray.vercel.app/users/${userId}`, {
        method: 'DELETE'
      });
      if (res.ok) {
        toast.success('User deleted permanently');
        fetchUsers();
      }
    } catch (err) {
      toast.error('Failed to delete user');
    }
  };

  const filteredUsers = users.filter(user =>
    user.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-base-200 to-base-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-5 bg-white/90 backdrop-blur-xl px-10 py-6 rounded-full shadow-2xl mb-8 border border-white/50">
            <FaUserShield className="text-4xl text-primary animate-pulse" />
            <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Manage Users
            </h1>
          </div>
          <p className="text-xl text-base-content/80">
            Total Users: <span className="font-bold text-primary">{users.length}</span>
          </p>
        </div>

 
        <div className="mb-10 max-w-2xl mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search by name or email..."
              className="input input-lg input-bordered w-full pl-12 pr-6"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl text-base-content/50" />
          </div>
        </div>


        <div className="bg-base-100 rounded-3xl shadow-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
              <thead className="bg-gradient-to-r from-primary to-secondary text-primary-content text-lg">
                <tr>
                  <th className="py-6">User</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Status</th>
                  <th className="text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.length > 0 ? (
                  filteredUsers.map((user) => (
                    <tr key={user._id} className="hover:bg-base-200 transition-colors">
                      <td className="py-6">
                        <div className="flex items-center gap-4">
                          <div className="avatar">
                            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                              <img src={user.photoURL || 'https://i.ibb.co/0jZJ7Yk/default-avatar.jpg'} alt={user.name} />
                            </div>
                          </div>
                          <div>
                            <div className="font-bold text-lg">{user.name || 'User'}</div>
                            <div className="text-sm text-base-content/60">
                              Joined {new Date(user.createdAt).toLocaleDateString()}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="font-medium">{user.email}</td>
                      <td>
                        <span className={`badge badge-lg ${user.role === 'admin' ? 'badge-error' : 'badge-success'} text-white`}>
                          {user.role || 'user'}
                        </span>
                      </td>
                      <td>
                        <span className={`badge badge-lg ${user.status === 'blocked' ? 'badge-error' : 'badge-success'} text-white`}>
                          {user.status || 'active'}
                        </span>
                      </td>
                      <td className="text-center">
                        <div className="dropdown dropdown-left">
                          <div tabIndex={0} role="button" className="btn btn-sm btn-ghost text-base-content/70 hover:bg-base-300">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                            </svg>
                          </div>
                          <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-56 z-10">

                            
                            {user.email === currentUserEmail ? (
                              <li className="text-center py-3 text-base-content/70 font-medium italic">
                                You (Current Admin)
                              </li>
                            ) : (
                              <>

                                {user.role !== 'admin' && (
                                  <li>
                                    <button
                                      onClick={() => handleMakeAdmin(user._id)}
                                      className="flex items-center gap-3 text-primary hover:bg-primary/10 rounded-lg"
                                    >
                                      <FaUserShield />
                                      Make Admin
                                    </button>
                                  </li>
                                )}


                                <li>
                                  <button
                                    onClick={() => handleDeleteUser(user._id)}
                                    className="flex items-center gap-3 text-error hover:bg-error/10 rounded-lg"
                                  >
                                    <FaTrashAlt />
                                    Delete User
                                  </button>
                                </li>
                              </>
                            )}

                          </ul>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="text-center py-12 text-2xl text-base-content/50">
                      No users found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageUsers;