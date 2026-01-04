import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { FaTrashAlt, FaEdit, FaEye, FaSearch, FaBoxOpen } from 'react-icons/fa';
import { Link } from 'react-router';

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchAllProducts();
  }, []);

  const fetchAllProducts = async () => {
    try {
      const res = await fetch('https://pawmart-server-gray.vercel.app/models');
      const data = await res.json();
      setProducts(data);
      setLoading(false);
    } catch (err) {
      toast.error('Failed to load products'); 
      setLoading(false);
    }
  };


  const handleDeleteProduct = async (id) => {
    if (!window.confirm('Are you sure you want to delete this product?')) return;

    try {
      const res = await fetch(`https://pawmart-server-gray.vercel.app/models/${id}`, {
        method: 'DELETE'
      });

      if (res.ok) {
        toast.success('Product deleted successfully!');
        fetchAllProducts(); 
      } else {
        throw new Error('Delete failed');
      }
    } catch (err) {
      toast.error('Failed to delete product');
    }
  };

  const filteredProducts = products.filter(product =>
    product.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.location?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-base-200 to-base-100  px-3">
      <div className=" mx-auto">

        <div className="text-center mb-5">
          <div className="inline-flex items-center gap-5  py-6 rounded-full  mb-2 border border-white/50">
            <FaBoxOpen className="text-4xl text-primary animate-pulse" />
            <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              All Products
            </h1>
          </div>
          <p className="text-xl text-base-content/80">
            Total Products: <span className="font-bold text-primary">{products.length}</span>
          </p>
        </div>

    
        <div className="mb-10 max-w-2xl mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search by name, category, or location..."
              className="input input-lg input-bordered w-full pl-12 pr-6"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl text-base-content/50" />
          </div>
        </div>

     
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product._id}
                className="card bg-base-100 shadow-2xl hover:shadow-primary/30 rounded-3xl overflow-hidden transition-all duration-500 group"
              >

                <div className="h-64 overflow-hidden">
                  <img
                    src={product.image || 'https://i.ibb.co/0jZJ7Yk/default-avatar.jpg'}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

     
                <div className="card-body p-6">
                  <h3 className="card-title text-xl font-bold mb-2 line-clamp-1">
                    {product.name}
                  </h3>
                  <div className="space-y-2 text-base-content/80">
                    <p className="flex items-center gap-2">
                      <FaBoxOpen className="text-primary" />
                      <span>{product.category}</span>
                    </p>
                    <p className="font-bold text-2xl text-success">
                      ${product.price}
                    </p>
                    <p className="text-sm">
                      Listed by: <span className="font-medium">{product.email}</span>
                    </p>
                  </div>


                  <div className="card-actions mt-6 flex gap-2">
                    <button
                      onClick={() => handleDeleteProduct(product._id)}
                      className="btn btn-error btn-outline flex-1 gap-2"
                    >
                      <FaTrashAlt /> Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-8xl text-base-content/20 mb-8">
              <FaBoxOpen />
            </div>
            <h3 className="text-4xl font-black text-base-content/70 mb-4">
              No Products Found
            </h3>
            <p className="text-xl text-base-content/60">
              Try adjusting your search or check back later
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllProducts;