import React, { useEffect, useState } from 'react';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import toast from 'react-hot-toast';
import { FaChartBar, FaDollarSign, FaBoxOpen, FaShoppingCart, FaUsers, FaCalendarAlt } from 'react-icons/fa';

const SalesAnalytics = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAnalytics();
  }, []);

  const fetchAnalytics = async () => {
    try {
      const res = await fetch('http://localhost:3000/overview');
      const result = await res.json();
      setData(result);
      setLoading(false);
    } catch (err) {
      toast.error('Failed to load analytics data');
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="text-center py-20">
        <h3 className="text-3xl font-bold text-base-content/70">No analytics data available</h3>
      </div>
    );
  }


  const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899', '#14b8a6'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-base-200 to-base-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-5 bg-white/90 backdrop-blur-xl px-10 py-6 rounded-full shadow-2xl mb-8 border border-white/50">
            <FaChartBar className="text-4xl text-primary animate-pulse" />
            <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Sales Analytics
            </h1>
          </div>
          <p className="text-xl text-base-content/80">
            Real-time insights into your marketplace performance
          </p>
        </div>

      
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="card bg-gradient-to-br from-primary to-primary-focus text-primary-content shadow-2xl">
            <div className="card-body text-center">
              <FaBoxOpen className="text-5xl mx-auto mb-4 opacity-90" />
              <div className="text-4xl font-black">{data.totalListings}</div>
              <div className="text-lg opacity-90">Total Listings</div>
            </div>
          </div>

          <div className="card bg-gradient-to-br from-success to-success-focus text-success-content shadow-2xl">
            <div className="card-body text-center">
              <FaShoppingCart className="text-5xl mx-auto mb-4 opacity-90" />
              <div className="text-4xl font-black">{data.totalOrders}</div>
              <div className="text-lg opacity-90">Total Orders</div>
            </div>
          </div>

          <div className="card bg-gradient-to-br from-secondary to-secondary-focus text-secondary-content shadow-2xl">
            <div className="card-body text-center">
              <FaDollarSign className="text-5xl mx-auto mb-4 opacity-90" />
              <div className="text-4xl font-black">${data.revenue}</div>
              <div className="text-lg opacity-90">Total Revenue</div>
            </div>
          </div>

          <div className="card bg-gradient-to-br from-accent to-accent-focus text-accent-content shadow-2xl">
            <div className="card-body text-center">
              <FaUsers className="text-5xl mx-auto mb-4 opacity-90" />
              <div className="text-4xl font-black">{data.usersTable.length}</div>
              <div className="text-lg opacity-90">Active Buyers</div>
            </div>
          </div>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
     
          <div className="card bg-base-100 shadow-2xl p-8">
            <h3 className="text-2xl font-bold text-center mb-6 text-primary">
              <FaCalendarAlt className="inline mr-3" />
              Monthly Orders (2026)
            </h3>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={data.ordersByMonth.labels.map((label, i) => ({ month: label, orders: data.ordersByMonth.data[i] }))}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="orders" fill="#3b82f6" radius={[10, 10, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

        
          <div className="card bg-base-100 shadow-2xl p-8">
            <h3 className="text-2xl font-bold text-center mb-6 text-primary">
              <FaBoxOpen className="inline mr-3" />
              Products by Category
            </h3>
            <ResponsiveContainer width="100%" height={400}>
              <PieChart>
                <Pie
                  data={data.listingsByCategory.labels.map((label, i) => ({
                    name: label,
                    value: data.listingsByCategory.data[i]
                  }))}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}`}
                  outerRadius={150}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {data.listingsByCategory.labels.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>


        <div className="card bg-base-100 shadow-2xl overflow-hidden">
          <div className="card-body">
            <h3 className="text-3xl font-bold text-center mb-8 text-primary">
              <FaUsers className="inline mr-3" />
              Top 5 Customers
            </h3>
            <div className="overflow-x-auto">
              <table className="table table-zebra w-full">
                <thead className="bg-primary text-primary-content text-lg">
                  <tr>
                    <th>Rank</th>
                    <th>Email</th>
                    <th>Total Orders</th>
                    <th className="text-center">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {data.usersTable.map((customer, index) => (
                    <tr key={index} className="hover:bg-base-200 transition-colors">
                      <td className="font-bold text-2xl text-primary">#{index + 1}</td>
                      <td className="font-medium">{customer.email}</td>
                      <td className="text-center font-bold text-xl text-success">{customer.orders}</td>
                      <td className="text-center">
                        <span className="badge badge-success badge-lg text-white">
                          VIP Buyer
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesAnalytics;