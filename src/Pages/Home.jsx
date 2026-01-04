import Banner from '../componet/Banner'
import { useLoaderData } from 'react-router'
import CategoryCard from '../componet/CategoryCard'
import image1 from '../assets/service1.jpg'
import image2 from '../assets/service2.jpg'
import image3 from '../assets/service3.jpg'
import RecentLesting from '../componet/RecentLesting'
import { FaHeartbeat, FaShieldAlt, FaHeadset, FaPaw } from 'react-icons/fa';
const Home = () => {
   const data = useLoaderData();


  const listings = Array.isArray(data) ? data : [];
  const reasons = [
    {
      title: "Expert Pet Health Care",
      desc: "Every pet receives complete health check-ups, vaccinations, deworming, and a veterinary health certificate before adoption.",
      icon: FaHeartbeat,
      gradient: "from-red-500 to-pink-600",
      image: image1
    },
    {
      title: "100% Safe & Verified",
      desc: "All pets come from trusted, background-checked breeders and shelters. Microchipped and fully documented for your peace of mind.",
      icon: FaShieldAlt,
      gradient: "from-blue-500 to-indigo-600",
      image: image2
    },
    {
      title: "Lifetime Expert Support",
      desc: "24/7 access to our veterinary team and pet care specialists. Free guidance on nutrition, training, and health — forever.",
      icon: FaHeadset,
      gradient: "from-emerald-500 to-teal-600",
      image: image3
    }
  ];
  return (
    <div>
      <Banner />
      <CategoryCard />
      <div className='grid grid-cols-1 p-4 md:p-0 md:grid-cols-3 gap-2'>
        {listings.length > 0 ? (
          listings.map((model) => (
            <RecentLesting key={model.id} model={model} />
          ))
        ) : (
          <p className='text-center text-lg text-gray-500'>
            No listings available at the moment.
          </p>
        )}
      </div>
     <section className="py-20 md:py-32 px-4 bg-gradient-to-br from-base-200 via-base-100 to-base-200">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-5 bg-white/90 backdrop-blur-2xl px-12 py-6 rounded-full shadow-2xl mb-10 border border-white/60">
            <FaPaw className="text-5xl text-primary animate-pulse" />
            <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Why Adopt from PawMart?
            </h2>
          </div>
          <p className="text-2xl md:text-3xl text-base-content/80 max-w-5xl mx-auto leading-relaxed font-medium">
            We go beyond adoption — we build happy, healthy families with lifelong care and support
          </p>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {reasons.map((reason, index) => (
            <div key={index} className="group relative">
              <div className="card bg-base-100/95 backdrop-blur-xl shadow-2xl hover:shadow-primary/50 rounded-3xl overflow-hidden h-full transition-all duration-800 group-hover:-translate-y-8 border border-white/30">
      
                <div className="h-80 md:h-96 overflow-hidden relative">
                  <img
                    src={reason.image}
                    alt={reason.title}
                    className="w-full h-full object-cover group-hover:scale-120 transition-transform duration-1200 ease-out"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>

                 
                  <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full bg-gradient-to-r ${reason.gradient} flex items-center justify-center shadow-2xl border-8 border-base-100`}>
                    <reason.icon className="text-6xl text-white" />
                  </div>
                </div>

            
                <div className="card-body p-10 text-center">
                  <h3 className="text-3xl md:text-4xl font-black mb-8 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                    {reason.title}
                  </h3>
                  <p className="text-xl md:text-2xl text-base-content/85 leading-relaxed">
                    {reason.desc}
                  </p>
                </div>

              
                <div className={`absolute inset-x-0 bottom-0 h-8 bg-gradient-to-r ${reason.gradient} blur-3xl opacity-0 group-hover:opacity-80 transition-opacity duration-800`}></div>
              </div>
            </div>
          ))}
        </div>

      
        <div className="mt-24 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <div className="bg-white/90 backdrop-blur-2xl px-12 py-10 rounded-3xl shadow-2xl border border-white/60">
              <div className="text-6xl font-black text-primary mb-4">15K+</div>
              <div className="text-3xl font-bold text-base-content/90">Successful Adoptions</div>
              <div className="text-base-content/70 mt-3">Trusted by families nationwide</div>
            </div>
            <div className="bg-white/90 backdrop-blur-2xl px-12 py-10 rounded-3xl shadow-2xl border border-white/60">
              <div className="text-6xl font-black text-yellow-500 mb-4">4.9★</div>
              <div className="text-3xl font-bold text-base-content/90">Customer Rating</div>
              <div className="text-base-content/70 mt-3">From verified pet parents</div>
            </div>
            <div className="bg-white/90 backdrop-blur-2xl px-12 py-10 rounded-3xl shadow-2xl border border-white/60">
              <div className="text-6xl font-black text-success mb-4">24/7</div>
              <div className="text-3xl font-bold text-base-content/90">Expert Support</div>
              <div className="text-base-content/70 mt-3">Always here when you need us</div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Home