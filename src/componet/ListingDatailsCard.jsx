import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import {
    FaMapMarkerAlt, FaTag, FaCalendarAlt, FaUser, FaStar,
    FaTruck, FaShieldAlt, FaHeart, FaShareAlt, FaPhone, FaArrowRight
} from 'react-icons/fa';
import OrderModel from "./OrderModel";

const ListingDetailsCard = () => {
    const data = useLoaderData();
    const model = data.result;

    const [order, setOrder] = useState(false);
    const [isFavorite, setIsFavorite] = useState(false);

    return (
        <>
          
            <div className="mt-5 min-h-screen bg-gradient-to-br from-base-200 to-base-100">
                
                <div className="pt-20 px-4 pb-12">
                    <div className="max-w-7xl mx-auto">
                      
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 bg-base-100 rounded-3xl shadow-2xl overflow-hidden">

                          
                            <div className="relative">
                                <div className="h-[400px] md:h-[600px] overflow-hidden">
                                    <img
                                        src={model.image || 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'}
                                        alt={model.name}
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000 ease-out"
                                    />
                                </div>

                             
                                <div className="absolute top-6 left-6 flex flex-col gap-3">
                                    <span className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-5 py-3 rounded-full text-lg font-bold shadow-2xl">
                                        <FaTag /> {model.category}
                                    </span>
                                    <span className="inline-flex items-center gap-2 bg-success text-white px-5 py-3 rounded-full text-lg font-bold shadow-2xl">
                                        <FaShieldAlt /> In Stock
                                    </span>
                                </div>

                               
                                <div className="absolute top-6 right-6 flex flex-col gap-3">
                                    <button
                                        onClick={() => setIsFavorite(!isFavorite)}
                                        className={`btn btn-circle btn-lg shadow-2xl ${isFavorite ? 'bg-red-500 hover:bg-red-600 text-white' : 'bg-white/90 hover:bg-white text-red-500'}`}
                                    >
                                        <FaHeart className="text-2xl" />
                                    </button>
                                    <button className="btn btn-circle btn-lg bg-white/90 hover:bg-white shadow-2xl">
                                        <FaShareAlt className="text-2xl text-primary" />
                                    </button>
                                </div>
                            </div>

                       
                            <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-between">
                                <div>
                                    <h1 className="text-4xl md:text-5xl font-black mb-4 leading-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                                        {model.name}
                                    </h1>

                                    <div className="flex items-center justify-between mb-8">
                                        <div className="text-5xl font-black text-primary">
                                            ${model.price}
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="flex items-center gap-1 text-yellow-500 text-xl">
                                                <FaStar className="fill-current" />
                                                <FaStar className="fill-current" />
                                                <FaStar className="fill-current" />
                                                <FaStar className="fill-current" />
                                                <FaStar className="fill-current" />
                                            </div>
                                            <span className="text-xl font-bold">4.9</span>
                                            <span className="text-base-content/60">(128 reviews)</span>
                                        </div>
                                    </div>

                                    <div className="space-y-5 mb-10 text-lg">
                                        <div className="flex items-center gap-4">
                                            <FaMapMarkerAlt className="text-primary text-2xl" />
                                            <span className="font-medium">{model.location}</span>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <FaUser className="text-primary text-2xl" />
                                            <span className="font-medium">Seller: {model.created_by || "Verified Seller"}</span>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <FaCalendarAlt className="text-primary text-2xl" />
                                            <span>Posted on {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <FaTruck className="text-success text-2xl" />
                                            <span className="text-success font-bold">Free Delivery Available</span>
                                        </div>
                                    </div>

                                    <div className="mb-10">
                                        <h3 className="text-2xl font-bold mb-4">Description</h3>
                                        <p className="text-base-content/80 leading-relaxed text-lg">
                                            {model.description || "Premium quality product carefully selected for your pet's health and happiness. Brand new condition with original packaging."}
                                        </p>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <button
                                        onClick={() => setOrder(true)}
                                        className="btn btn-primary btn-lg w-full shadow-2xl hover:shadow-primary/50 text-xl font-bold rounded-2xl h-16 bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary border-0"
                                    >
                                        <span className="flex items-center justify-center gap-4">
                                            Place Order Now
                                            <FaArrowRight className="text-2xl" />
                                        </span>
                                    </button>

                                    <button className="btn btn-outline btn-lg w-full shadow-xl hover:shadow-primary/30 text-xl font-medium rounded-2xl h-14 flex items-center justify-center gap-4">
                                        <FaPhone className="text-2xl" />
                                        Contact Seller
                                    </button>
                                </div>
                            </div>
                        </div>

                  

                    </div>
                </div>
            </div>

            {
                order && (
                    <dialog open className="modal">
                        <div className="modal-box">
                            <div className="bg-gradient-to-r from-primary to-secondary text-primary-content p-6">
                                <h3 className="text-3xl font-black">Complete Your Order</h3>
                                <p className="text-lg opacity-90 mt-2">You're one step away from getting this for your pet!</p>
                            </div>
                            <OrderModel model={model} setOrder={setOrder} />
                            <div className="modal-action">
                                <button className="btn " onClick={() => setOrder(false)}>Cancel</button>
                            </div>
                        </div>
                    </dialog>
                )
            } 
        </>
    );
};

export default ListingDetailsCard;
