import React from "react";
import { Link } from "react-router";
import {
  FaMapMarkerAlt,
  FaStar,
  FaHeart,
  FaEye,
  FaTag,
  FaClock,
  FaTruck,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";
import { motion } from "framer-motion";

const PetsSuppliesCard = ({ model }) => {
  const {
    _id,
    category,
    image,
    location,
    name,
    price,
    rating = 4.5,
    views = 120,
    posted = "2 days ago",
  } = model || {};

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.4 }}
      className="group"
    >
      <div className="card w-80 md:w-96  h-[480px] bg-base-100 shadow-2xl rounded-3xl overflow-hidden border border-base-200">

        {/* Image Section */}
        <div className="relative h-64 overflow-hidden">
          <img
            src={
              image ||
              "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e"
            }
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          {/* Actions */}
          <div className="absolute top-4 right-4 flex gap-2">
            <button className="btn btn-circle btn-sm btn-error">
              <FaHeart />
            </button>
            <button className="btn btn-circle btn-sm btn-info">
              <FaEye />
            </button>
          </div>

          {/* Category */}
          <div className="absolute top-4 left-4">
            <span className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full text-sm font-bold">
              <FaTag />
              {category}
            </span>
          </div>

          {/* Stock */}
          <div className="absolute bottom-4 left-4">
            <span className="flex items-center gap-2 bg-success text-white px-3 py-1 rounded-full text-xs font-semibold">
              <FaCheckCircle />
              In Stock
            </span>
          </div>
        </div>


        <div className="card-body p-6">
     
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-3xl font-black text-primary">${price}</h2>
            <div className="flex items-center gap-1 text-sm">
              <FaStar className="text-yellow-400" />
              {rating}
              <span className="text-xs text-gray-500">({views})</span>
            </div>
          </div>

    
          <h3 className="text-xl font-bold line-clamp-2 mb-3 group-hover:text-primary">
            {name}
          </h3>

        
          <div className="space-y-2 text-sm text-gray-500">
            <p className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-primary" />
              {location}
            </p>
            <p className="flex items-center gap-2">
              <FaClock className="text-secondary" />
              Posted {posted}
            </p>
            <p className="flex items-center gap-2">
              <FaTruck className="text-success" />
              Free Shipping
            </p>
          </div>

          {/* Button */}
          <div className="mt-auto pt-4">
            <Link
              to={`/listing-details/${_id}`}
              className="btn w-full btn-lg bg-gradient-to-r from-primary to-secondary text-white border-0 rounded-2xl"
            >
              View Details
              <FaArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PetsSuppliesCard;
