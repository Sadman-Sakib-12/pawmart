import React from 'react';
import { Link } from 'react-router';
import { 
  FaMapMarkerAlt, FaTag, FaStar, FaHeart, FaEye, FaArrowRight, 
  FaShieldAlt
} from 'react-icons/fa';
import { motion } from 'framer-motion';

const RecentListing = ({ model }) => {
  const { category, _id, image, location, name, price, rating = 4.8,  } = model;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.4 }}
      className="group"
    >
      <div className="card bg-gradient-to-b from-base-100/95 to-base-100 shadow-2xl hover:shadow-primary/30 border border-base-200/50 overflow-hidden rounded-3xl w-80 md:w-96 h-[520px] relative">
        

        <div className="relative h-64 overflow-hidden rounded-t-3xl">
          <img
            src={image || 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
            loading="lazy"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          <div className="absolute top-4 left-4">
            <span className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
              <FaTag /> {category}
            </span>
          </div>


          <div className="absolute top-4 right-4 flex gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <button className="btn btn-circle btn-sm btn-primary shadow-lg hover:scale-110">
              <FaHeart className="text-lg text-red-400" />
            </button>
          </div>

 
          <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
            <FaStar className="text-yellow-500 fill-current" />
            <span className="font-bold">{rating}</span>
          </div>
        </div>

  
        <div className="card-body p-6">
       
          <div className="flex items-center justify-between mb-4">
            <div className="text-4xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent drop-shadow-md">
              ${price}
            </div>
            <div className="flex items-center gap-1 text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className={i < Math.floor(rating) ? "fill-current" : ""} />
              ))}
            </div>
          </div>

      
          <h3 className="card-title text-2xl font-bold mb-3 leading-tight line-clamp-2 group-hover:text-primary transition-colors">
            {name}
          </h3>

   
          <div className="flex items-center gap-3 text-base-content/70 mb-6">
            <FaMapMarkerAlt className="text-primary text-xl" />
            <span className="font-medium">{location}</span>
          </div>

    
          <div className="card-actions">
            <Link
              to={`/listing-details/${_id}`}
              className="btn btn-lg w-full shadow-2xl hover:shadow-primary/50 transition-all duration-300 bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white border-0 text-lg font-bold rounded-2xl h-14 group-hover:scale-[1.02]"
            >
              <span className="flex items-center justify-center gap-3">
                View Details
                <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default RecentListing;