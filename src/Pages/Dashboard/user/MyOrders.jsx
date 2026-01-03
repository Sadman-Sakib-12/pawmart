import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../context/AuthContext';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { FaDownload, FaCalendarAlt, FaMapMarkerAlt, FaPhone, FaUser, FaBox, FaDollarSign, FaShoppingBag, FaFilePdf } from 'react-icons/fa';
import toast from 'react-hot-toast';
import { Link } from 'react-router';

const MyOrders = () => {
  const [myorder, setMyorder] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (!user?.email) return;

    fetch(`https://pawmart-server-gray.vercel.app/my-order?email=${user.email}`)
      .then(res => res.json())
      .then(data => {
        setMyorder(data.result || []);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        toast.error('Failed to load orders');
        setLoading(false);
      });
  }, [user]);
  const handleDownloadPdf = () => {
    const doc = new jsPDF()
    doc.text(`${user.displayName}`, 14, 15)
    autoTable(doc, {
      startY: 25,
      head: [['Product Name', 'BuyerName', 'Price', 'Quantity', 'Address', 'Date', 'Phone']],
      body: myorder.map(o => [
        o.category,
        o.buyerName,
        o.price,
        o.quantity,
        o.address,
        o.date,
        o.phone

      ])
    })
    doc.save(`${user.displayName}.pdf`)
  }
 
  const handleDownloadAllPdf = () => {
    const doc = new jsPDF('landscape');

    // Header
    doc.setFontSize(20);
    doc.text('My Orders Report', 14, 20);
    doc.setFontSize(12);
    doc.text(`Customer: ${user?.displayName || 'User'}`, 14, 30);
    doc.text(`Email: ${user?.email}`, 14, 38);
    doc.text(`Generated: ${new Date().toLocaleDateString('en-GB')}`, 14, 46);

    autoTable(doc, {
      startY: 60,
      head: [['Product', 'Buyer', 'Price', 'Qty', 'Address', 'Date', 'Phone']],
      body: myorder.map(o => [
        o.category || 'N/A',
        o.buyerName || 'N/A',
        `$${o.price || 0}`,
        o.quantity || 1,
        o.address || 'N/A',
        o.date || 'N/A',
        o.phone || 'N/A'
      ]),
      theme: 'grid',
      styles: { fontSize: 10, cellPadding: 4 },
      headStyles: { fillColor: [59, 130, 246], textColor: 255 },
    });

    doc.save(`PawMart_Orders_${user?.displayName || 'User'}.pdf`);
    toast.success('PDF downloaded successfully! 🐾');
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-base-200 to-base-100 py-5 px-">
      <div className="max-w-7xl mx-auto">
   
        <div className="text-center mb-4">
          <div className="inline-flex items-center gap-5 bgshadow-2xl mb-8 border border-white/50">
            <FaShoppingBag className="text-4xl text-primary animate-pulse" />
            <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              My Orders
            </h1>
          </div>
          <p className="text-xl text-base-content/80">
            Track and manage all your pet product purchases in one place
          </p>
        </div>


        {myorder.length > 0 && (
          <div className="text-center mb-10">
            <button
              onClick={handleDownloadAllPdf}
              className="btn btn-lg btn-primary shadow-2xl hover:shadow-primary/50 text-xl px-12 rounded-full bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary border-0"
            >
              <FaFilePdf className="text-2xl" />
              Download All Orders PDF
            </button>
          </div>
        )}

        {/* Orders Table or Empty State */}
        {myorder.length > 0 ? (
          <div className="bg-base-100 rounded-3xl shadow-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="table table-zebra w-full">
                <thead className="bg-gradient-to-r from-primary to-secondary text-primary-content text-lg">
                  <tr>
                    <th className="py-6">Product</th>
                    <th>Buyer</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Address</th>
                    <th>Date</th>
                    <th>Phone</th>
                    <th className="text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {myorder.map((order, index) => (
                    <tr key={index} className="hover:bg-base-200 transition-colors duration-300">
                      <td className="py-6">
                        <div className="flex items-center gap-4">
                          <div className="w-16 h-16 rounded-xl overflow-hidden shadow-lg">
                            <div className="bg-gradient-to-br from-primary/20 to-secondary/20 w-full h-full flex items-center justify-center">
                              <FaBox className="text-3xl text-primary" />
                            </div>
                          </div>
                          <div>
                            <div className="font-bold text-lg">{order.category || 'Pet Product'}</div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="flex items-center gap-2">
                          <FaUser className="text-primary" />
                          <span className="font-medium">{order.buyerName || 'N/A'}</span>
                        </div>
                      </td>
                      <td>
                        <div className="flex items-center gap-2 font-black text-2xl text-success">
                          <FaDollarSign />
                          {order.price || 0}
                        </div>
                      </td>
                      <td className="text-center font-bold text-xl">
                        {order.quantity || 1}
                      </td>
                      <td>
                        <div className="flex items-center gap-2">
                          <FaMapMarkerAlt className="text-primary" />
                          <span>{order.address || 'N/A'}</span>
                        </div>
                      </td>
                      <td>
                        <div className="flex items-center gap-2">
                          <FaCalendarAlt className="text-primary" />
                          <span>{order.date || 'N/A'}</span>
                        </div>
                      </td>
                      <td>
                        <div className="flex items-center gap-2">
                          <FaPhone className="text-primary" />
                          <span>{order.phone || 'N/A'}</span>
                        </div>
                      </td>
                      <td className="text-center">
                        {
                          myorder && (
                            <Link className='btn btn-outline btn-primary btn-sm rounded-full shadow-lg hover:shadow-primary/50 ' onClick={handleDownloadPdf}>
                              <FaDownload />  PDF
                            </Link>
                          )
                        }                 
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-8xl text-base-content/20 mb-8">
              <FaShoppingBag />
            </div>
            <h3 className="text-4xl font-black text-base-content/70 mb-4">
              No Orders Yet
            </h3>
            <p className="text-xl text-base-content/60 mb-8">
              Start shopping and your orders will appear here
            </p>
            <Link
              to="/pets-supplies"
              className="btn btn-lg btn-primary shadow-2xl text-xl px-12 rounded-full bg-gradient-to-r from-primary to-secondary"
            >
              Browse Products
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyOrders;
