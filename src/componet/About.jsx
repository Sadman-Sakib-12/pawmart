import React from 'react';
import { Link } from 'react-router';
import { 
  FaPaw, FaTruck, FaShieldAlt, FaHeadset, FaEnvelope, 
  FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaMapMarkerAlt,
  FaStar, FaUsers, FaChartLine
} from 'react-icons/fa';
import { motion } from 'framer-motion'; 

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-base-200 to-base-100">
     
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="hero min-h-[70vh] bg-gradient-to-r from-primary to-secondary text-primary-content py-20 md:py-32"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1581578731548-67b7a2197a7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="hero-overlay bg-black/40"></div>
        <div className="hero-content text-center max-w-5xl mx-auto px-6">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-xl px-6 py-3 rounded-full mb-8">
              <FaPaw className="text-2xl" />
              <span className="text-xl font-bold tracking-wide">PawMart - Pet Lovers Paradise</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight drop-shadow-2xl">
              Love for Pets, 
              <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Delivered Daily</span>
            </h1>
            <p className="text-xl md:text-2xl opacity-95 max-w-2xl mx-auto mb-10 leading-relaxed">
              Premium pet products marketplace trusted by 10,000+ pet parents. Fast delivery, secure payments, happy pets guaranteed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/pets-supplies" className="btn btn-lg btn-secondary shadow-2xl text-xl px-10 border-0 bg-gradient-to-r from-secondary to-accent hover:from-accent hover:to-secondary">
                🛒 Start Shopping
              </Link>
              <Link to="/login" className="btn btn-lg btn-outline btn-primary shadow-2xl text-xl px-10 border-2">
                Sell Your Products
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <section className="py-24 px-6 -mt-10 relative z-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-primary/20 to-secondary/20 px-6 py-3 rounded-2xl backdrop-blur-xl border border-primary/30">
              <FaPaw className="text-2xl text-primary" />
              <h2 className="text-4xl font-black text-primary">Our Journey</h2>
            </div>
            <div className="space-y-6 text-lg leading-relaxed">
              <p className="text-base-content/90">
                Founded in <span className="font-bold text-primary">2024</span> by passionate pet lovers in Dhaka, PawMart solves the chaos of finding quality pet products. From premium dog food to cat toys, bird cages to fish aquariums — everything in one secure marketplace.
              </p>
              <p className="text-base-content/90">
                We partner with verified sellers and veterinary experts to ensure every product meets the highest standards. <span className="font-bold text-success">4.9★ average rating</span> from 12K+ reviews.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-base-300">
              <div className="text-center p-4 bg-base-100/50 rounded-xl backdrop-blur-sm border">
                <div className="text-3xl font-black text-primary mb-1">500+</div>
                <div>Vetted Sellers</div>
              </div>
              <div className="text-center p-4 bg-base-100/50 rounded-xl backdrop-blur-sm border">
                <div className="text-3xl font-black text-success mb-1">24h</div>
                <div>Delivery</div>
              </div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-primary/10 via-white/50 to-secondary/10 backdrop-blur-xl rounded-3xl p-8 border border-primary/20 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Pet lovers team"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-r from-primary to-secondary rounded-full opacity-20"></div>
            </div>
          </motion.div>
        </div>
      </section>

 
      <section className="py-24 bg-base-100/50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-500/20 to-green-500/20 px-6 py-3 rounded-2xl backdrop-blur-xl border border-emerald-400/30 mb-8">
              <FaStar className="text-2xl text-emerald-500" />
              <h2 className="text-4xl lg:text-5xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Why PawMart Stands Out
              </h2>
            </div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: FaShieldAlt, title: "Bank-Level Security", desc: "SSL encryption, verified payments, fraud protection", color: "from-blue-500 to-indigo-600" },
              { icon: FaTruck, title: "Lightning Delivery", desc: "Same-day in Dhaka, 24h nationwide, live tracking", color: "from-orange-500 to-red-500" },
              { icon: FaUsers, title: "Expert Vetted", desc: "Vet-approved products, seller background checks", color: "from-emerald-500 to-teal-600" },
              { icon: FaHeadset, title: "24/7 Live Support", desc: "Pet experts available via chat/call/email", color: "from-purple-500 to-pink-600" },
              { icon: FaChartLine, title: "Price Match Guarantee", desc: "Cheapest prices + exclusive member discounts", color: "from-amber-500 to-yellow-600" },
              { icon: FaPaw, title: "Pet Happiness Promise", desc: "30-day returns, quality guarantee or refund", color: "from-primary to-secondary" }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="card bg-gradient-to-br from-base-100/80 to-white/50 backdrop-blur-xl shadow-2xl hover:shadow-primary/20 border border-white/50 overflow-hidden group"
              >
                <div className={`p-8 text-center group-hover:scale-110 transition-all duration-300`}>
                  <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center shadow-2xl`}>
                    <feature.icon className="text-3xl text-white shadow-lg" />
                  </div>
                  <h3 className="text-2xl font-black mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">{feature.title}</h3>
                  <p className="text-base-content/90 leading-relaxed">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { num: "15K+", label: "Happy Pets", icon: FaPaw },
            { num: "1K+", label: "Orders Daily", icon: FaTruck },
            { num: "4.95★", label: "Rating", icon: FaStar },
            { num: "50+", label: "Categories", icon: FaUsers }
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="p-8 bg-white/70 backdrop-blur-xl rounded-3xl shadow-xl border"
            >
              <stat.icon className="text-4xl text-primary mx-auto mb-4" />
              <div className="text-4xl md:text-5xl font-black text-primary mb-2">{stat.num}</div>
              <div className="text-xl font-semibold text-base-content/80">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>


      <section className="py-24 px-6 bg-gradient-to-b from-base-100 to-base-200">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black mb-8 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent"
          >
            Ready to Join the PawMart Family?
          </motion.h2>
          <p className="text-xl text-base-content/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            Create your account today and get ৳200 welcome credit on your first purchase!
          </p>
          <div className="flex flex-col lg:flex-row gap-6 justify-center items-center mb-16">
            <Link to="/register" className="btn btn-lg btn-primary shadow-2xl text-xl px-12 border-0 bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary">
              🚀 Get Started Free
            </Link>
            <div className="flex gap-4 text-2xl">
              <a href="#" className="p-3 bg-primary/20 hover:bg-primary/40 rounded-2xl transition-all"><FaFacebookF /></a>
              <a href="#" className="p-3 bg-gradient-to-r from-pink-500 to-purple-500 hover:scale-110 rounded-2xl transition-all"><FaInstagram /></a>
              <a href="#" className="p-3 bg-sky-500 hover:bg-sky-600 rounded-2xl transition-all"><FaTwitter /></a>
              <a href="#" className="p-3 bg-red-500 hover:bg-red-600 rounded-2xl transition-all"><FaYoutube /></a>
            </div>
          </div>


          <div className="grid md:grid-cols-3 gap-8 text-sm text-base-content/70">
            <div>
              <h4 className="font-bold text-primary mb-3 flex items-center gap-2">
                <FaMapMarkerAlt /> Office
              </h4>
              <p>Level-4, 34, Awal Centre<br/>Banani, Dhaka-1213</p>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-3 flex items-center gap-2">
                <FaEnvelope /> Email
              </h4>
              <p>support@pawmart.com<br/>business@pawmart.com</p>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-3 flex items-center gap-2">
                <FaHeadset /> Helpline
              </h4>
              <p>01335-106731<br/>01332-502004<br/>(Sat-Thu, 10AM-7PM)</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;