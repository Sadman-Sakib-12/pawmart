import React, { useEffect, useState } from 'react';
import { Bar, Doughnut, Line } from 'react-chartjs-2';
import {
  Chart as ChartJS, CategoryScale, LinearScale, BarElement,
  PointElement, LineElement, Title, Tooltip, Legend, ArcElement, Filler
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, ArcElement, Title, Tooltip, Legend, Filler);

const Overview = () => {
  const [viewMode, setViewMode] = useState('live');
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({
    totalListings: 0,
    totalOrders: 0,
    revenue: 0,
    ordersByMonth: { labels: [], data: [] },
    listingsByCategory: { labels: [], data: [] },
    usersTable: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(`https://pawmart-server-gray.vercel.app/overview?mode=${viewMode}`);
        const result = await res.json();
        setData(result);
      } catch (err) {
        console.error("Fetch error:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [viewMode]);

 
  const barData = {
    labels: data.ordersByMonth.labels,
    datasets: [{
      label: 'Orders',
      data: data.ordersByMonth.data,
      backgroundColor: '#6366F1',
      borderRadius: 8,
      hoverBackgroundColor: '#4F46E5',
    }],
  };

  const lineData = {
    labels: data.ordersByMonth.labels,
    datasets: [{
      fill: true,
      label: 'Revenue Trend',
      data: data.ordersByMonth.data,
      borderColor: '#10B981',
      backgroundColor: 'rgba(16, 185, 129, 0.1)',
      tension: 0.4,
      pointRadius: 5,
      pointBackgroundColor: '#fff',
      pointBorderWidth: 2,
    }],
  };

  const doughnutData = {
    labels: data.listingsByCategory.labels,
    datasets: [{
      data: data.listingsByCategory.data,
      backgroundColor: ['#6366F1', '#10B981', '#F43F5E', '#F59E0B', '#3B82F6'],
      borderWidth: 0,
      hoverOffset: 10
    }],
  };

  const commonOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      y: { display: false, beginAtZero: true },
      x: { grid: { display: false }, ticks: { font: { size: 10, weight: 'bold' }, color: '#94A3B8' } }
    },
    animation: { duration: 2000, easing: 'easeOutQuart' }
  };

  return (
    <div className="min-h-screen bg-[#F1F5F9] p-6 md:p-12 font-sans text-slate-900">
      <div className="max-w-[1400px] mx-auto space-y-10">
        
        
        <div className="flex flex-col md:flex-row justify-between items-center bg-white p-8 rounded-[2.5rem] shadow-xl shadow-slate-200/50">
          <div>
            <h1 className="text-3xl font-black text-slate-800 italic tracking-tighter">ANALYTICS COMMAND</h1>
            <p className="text-slate-400 text-xs font-bold uppercase tracking-[0.3em]">Operational Oversight</p>
          </div>
          <div className="flex bg-slate-100 p-1.5 rounded-2xl mt-6 md:mt-0 shadow-inner">
            {['live', 'history'].map((mode) => (
              <button key={mode} onClick={() => setViewMode(mode)} className={`px-8 py-2.5 rounded-xl text-[10px] font-black uppercase transition-all ${viewMode === mode ? 'bg-white text-indigo-600 shadow-md' : 'text-slate-400 hover:text-slate-600'}`}>{mode} Feed</button>
            ))}
          </div>
        </div>

       
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <StatCard title="Active Inventory" value={data.totalListings} icon="📦" color="text-blue-600" bg="bg-blue-50" />
          <StatCard title="Successful Orders" value={data.totalOrders} icon="✅" color="text-indigo-600" bg="bg-indigo-50" />
          <StatCard title="Net Revenue" value={`$${data.revenue}`} icon="💰" color="text-emerald-600" bg="bg-emerald-50" />
          <StatCard title="Efficiency" value="94.2%" icon="⚡" color="text-orange-600" bg="bg-orange-50" />
        </div>

        {/* Main Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <ChartCard title="Sales Distribution" subtitle="Monthly Order Volume" icon="📊">
             {!loading ? <Bar data={barData} options={commonOptions} key={`bar-${viewMode}`} /> : <div className="h-full flex items-center justify-center animate-pulse">Loading...</div>}
          </ChartCard>

          <ChartCard title="Revenue Growth" subtitle="Sales Performance over time" icon="📈">
             {!loading ? <Line data={lineData} options={commonOptions} key={`line-${viewMode}`} /> : <div className="h-full flex items-center justify-center animate-pulse">Syncing...</div>}
          </ChartCard>

          <ChartCard title="Category Mix" subtitle="Inventory Breakdown" icon="🎯">
             <div className="relative h-full flex items-center justify-center">
                {!loading ? <Doughnut data={doughnutData} options={{...commonOptions, cutout: '80%'}} key={`dough-${viewMode}`} /> : null}
                <div className="absolute text-center">
                   <p className="text-3xl font-black text-slate-800 leading-none">{data.totalListings}</p>
                   <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest mt-1">Total Items</p>
                </div>
             </div>
          </ChartCard>
        </div>

 
        <div className="bg-white p-10 rounded-[3rem] shadow-xl shadow-slate-200/50 border border-white">
          <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-8 flex items-center gap-2">
            <span className="w-2 h-2 bg-indigo-500 rounded-full animate-ping"></span> Top Customer Activity
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-slate-300 text-[10px] font-black uppercase tracking-widest border-b border-slate-50">
                  <th className="pb-6">Account Identity</th>
                  <th className="pb-6 text-right">Engagement Level</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {data.usersTable.map((user, i) => (
                  <tr key={i} className="group hover:bg-slate-50/50 transition-all">
                    <td className="py-5 font-bold text-slate-700 text-sm">{user.email}</td>
                    <td className="py-5 text-right">
                      <span className="px-5 py-1.5 bg-white border border-slate-100 text-indigo-600 rounded-xl text-[10px] font-black shadow-sm group-hover:bg-indigo-600 group-hover:text-white transition-all">
                        {user.orders} ORDERS
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
  );
};


const StatCard = ({ title, value, icon, color, bg }) => (
  <div className={`bg-white p-8 rounded-[2.5rem] shadow-lg shadow-slate-200/40 border border-white flex items-center justify-between group hover:-translate-y-1 transition-all duration-300`}>
    <div>
      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{title}</p>
      <h2 className={`text-2xl font-black italic tracking-tighter ${color}`}>{value}</h2>
    </div>
    <div className={`w-12 h-12 ${bg} rounded-2xl flex items-center justify-center text-xl shadow-inner`}>{icon}</div>
  </div>
);

const ChartCard = ({ title, subtitle, icon, children }) => (
  <div className="bg-white p-10 rounded-[3rem] shadow-xl shadow-slate-200/50 border border-white flex flex-col h-[420px] group hover:shadow-2xl transition-all duration-500">
    <div className="flex justify-between items-start mb-8">
      <div>
        <h3 className="text-lg font-black text-slate-800 italic leading-none">{title}</h3>
        <p className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.1em] mt-1">{subtitle}</p>
      </div>
      <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-lg">{icon}</div>
    </div>
    <div className="flex-grow">{children}</div>
  </div>
);

export default Overview;