import React from 'react';
import { Link, useNavigate } from 'react-router';
import { FaPaw, FaSearch, FaArrowRight } from 'react-icons/fa';
import imgag from '../assets/image.png';
import imgag2 from '../assets/image.jpg';
import imgag3 from '../assets/image.webp';
import imgag4 from '../assets/image2.webp';

const categories = [
  { name: "Pets", image: imgag, color: "from-pink-500 to-rose-600" },
  { name: "Pet Food", image: imgag2,  color: "from-amber-500 to-orange-600" },
  { name: "Accessories", image: imgag4, color: "from-blue-500 to-indigo-600" },
  { name: "Pet Care Products", image: imgag3,  color: "from-emerald-500 to-teal-600" }
];

const CategoryCard = () => {
  const navigate = useNavigate();

  const handleClick = (categoryName) => {
    navigate(`/category-filtered-prduct/${categoryName}`);
  };

  return (
    <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-base-200 to-base-100">
      <div className="max-w-7xl mx-auto">
       
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-4 bg-white/80 backdrop-blur-xl px-8 py-4 rounded-full shadow-2xl mb-8 border border-white/50">
            <FaPaw className="text-3xl text-primary animate-pulse" />
            <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Shop by Category
            </h2>
          </div>
          <p className="text-xl text-base-content/80 max-w-3xl mx-auto leading-relaxed">
            Explore our premium collections curated for every pet's needs
          </p>
        </div>

       
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              onClick={() => handleClick(category.name)}
              className="group cursor-pointer"
            >
              <div className="relative h-96 md:h-[420px] rounded-3xl overflow-hidden shadow-2xl hover:shadow-primary/40 transition-all duration-700 group-hover:-translate-y-4">
           
                <div className="absolute inset-0">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-90"></div>
                </div>

              
                <div className="absolute inset-0 flex flex-col justify-end p-8 text-primary-content">
           
                  <div className="mb-4">
                    <span className={`inline-flex items-center gap-3 bg-gradient-to-r ${category.color} text-white px-6 py-3 rounded-full text-lg font-bold shadow-2xl`}>
                      <FaSearch className="text-xl" />
                      {category.count}
                    </span>
                  </div>

             
                  <h3 className="text-3xl md:text-4xl font-black mb-4 leading-tight drop-shadow-2xl">
                    {category.name}
                  </h3>

                  <div className="flex items-center gap-3 text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span>Explore Now</span>
                    <FaArrowRight className="text-2xl group-hover:translate-x-3 transition-transform" />
                  </div>
                </div>

                <div className={`absolute inset-0 rounded-3xl border-4 border-transparent bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-700 -z-10`}></div>
              </div>
            </div>
          ))}
        </div>    
      </div>
    </section>
  );
};

export default CategoryCard;