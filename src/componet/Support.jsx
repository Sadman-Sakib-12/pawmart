import React from 'react';
import { Link } from 'react-router';
import { 
  FaHeadset, FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock, 
  FaQuestionCircle, FaShippingFast, FaUndo, FaShieldAlt, 
  FaWhatsapp, FaFacebookMessenger, FaArrowRight, FaStar
} from 'react-icons/fa';

const Support = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-base-100 via-base-100  to-base-200">

      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/90"></div>
        <div className="absolute inset-0 bg-black/30"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')" }}
        ></div>

        <div className="relative max-w-6xl mx-auto px-6 text-center text-primary-content">
          <div className="inline-flex items-center gap-4 bg-white/20 backdrop-blur-xl px-8 py-4 rounded-full mb-8 border border-white/30">
            <FaHeadset className="text-3xl animate-pulse" />
            <span className="text-2xl font-bold tracking-wider">PawMart Support</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight drop-shadow-2xl">
            We're Here to Help You
            <span className="block text-yellow-300 mt-2">& Your Pet</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-95 max-w-3xl mx-auto leading-relaxed mb-10">
            Fast, friendly, and expert support — available 7 days a week
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="tel:+8801335106731" className="btn btn-lg btn-neutral shadow-2xl text-xl px-10">
              <FaPhone /> Call Now
            </a>
            <Link to="#contact-form" className="btn btn-lg btn-outline btn-primary shadow-2xl text-xl px-10 border-2">
              <FaEnvelope /> Send Message
            </Link>
          </div>
        </div>
      </section>

     
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            How Can We Assist You Today?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: FaShippingFast, title: "Track Your Order", desc: "Check delivery status & estimated arrival", color: "from-blue-500 to-cyan-600" },
              { icon: FaUndo, title: "Returns & Refunds", desc: "Easy 30-day return policy explained", color: "from-green-500 to-emerald-600" },
              { icon: FaQuestionCircle, title: "Product Questions", desc: "Ask about sizes, ingredients, usage", color: "from-purple-500 to-indigo-600" },
              { icon: FaShieldAlt, title: "Payment & Security", desc: "SSL protected, multiple payment options", color: "from-orange-500 to-red-600" }
            ].map((item, i) => (
              <div 
                key={i}
                className="card bg-base-100 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group"
              >
                <div className="card-body text-center p-8">
                  <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${item.color} flex items-center justify-center shadow-2xl group-hover:scale-110 transition`}>
                    <item.icon className="text-4xl text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                  <p className="text-base-content/80 mb-6">{item.desc}</p>
                  <Link to="#faq" className="btn btn-primary btn-outline btn-sm gap-2">
                    Learn More <FaArrowRight />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

   
      <section className="py-16 md:py-24 bg-base-100/50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Reach Us Anytime
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Phone Support */}
            <div className="card bg-gradient-to-br from-primary to-secondary text-primary-content shadow-2xl hover:shadow-primary/50 transition">
              <div className="card-body text-center p-10">
                <FaPhone className="text-5xl mx-auto mb-6" />
                <h3 className="text-2xl font-black mb-4">Call Us</h3>
                <p className="text-lg mb-6">Speak directly with our pet experts</p>
                <div className="space-y-3 mb-8">
                  <a href="tel:+8801335106731" className="block text-2xl font-bold">01335-106731</a>
                  <a href="tel:+8801332502004" className="block text-2xl font-bold">01332-502004</a>
                </div>
                <p className="flex items-center justify-center gap-2 opacity-90">
                  <FaClock /> Sat - Thu, 10:00 AM - 7:00 PM
                </p>
              </div>
            </div>

            {/* Live Chat Options */}
            <div className="card bg-base-100 shadow-2xl">
              <div className="card-body text-center p-10">
                <FaHeadset className="text-5xl text-primary mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4">Live Chat</h3>
                <p className="text-base-content/80 mb-8">Instant help from our support team</p>
                <div className="space-y-4">
                  <a href="#" className="btn btn-success btn-lg w-full gap-3 shadow-xl">
                    <FaWhatsapp className="text-2xl" /> WhatsApp
                  </a>
                  <a href="#" className="btn btn-info btn-lg w-full gap-3 shadow-xl">
                    <FaFacebookMessenger className="text-2xl" /> Messenger
                  </a>
                </div>
              </div>
            </div>

            {/* Email Support */}
            <div className="card bg-gradient-to-br from-secondary to-accent text-primary-content shadow-2xl hover:shadow-accent/50 transition">
              <div className="card-body text-center p-10">
                <FaEnvelope className="text-5xl mx-auto mb-6" />
                <h3 className="text-2xl font-black mb-4">Email Us</h3>
                <p className="text-lg mb-6">We'll reply within 2-4 hours</p>
                <a href="mailto:support@pawmart.com" className="block text-2xl font-bold mb-4">
                  support@pawmart.com
                </a>
                <p className="opacity-90">Response time: Usually under 4 hours</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Accordion Style */}
      <section id="faq" className="py-16 md:py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {[
              { q: "How long does delivery take?", a: "Dhaka: 24-48 hours | Outside Dhaka: 2-4 business days. Same-day delivery available in selected areas." },
              { q: "What is your return policy?", a: "30-day hassle-free returns. Unused products in original packaging qualify for full refund or exchange." },
              { q: "Are products genuine?", a: "Yes! We only work with verified suppliers and authorized distributors. All products come with authenticity guarantee." },
              { q: "Do you offer cash on delivery?", a: "Yes, COD available nationwide with a small convenience fee." },
              { q: "How can I track my order?", a: "You'll receive a tracking link via SMS and email once your order is dispatched." }
            ].map((faq, i) => (
              <details key={i} className="collapse collapse-plus bg-base-100 shadow-xl rounded-2xl">
                <summary className="collapse-title text-xl font-bold py-6 px-8">
                  {faq.q}
                </summary>
                <div className="collapse-content px-8 pb-8">
                  <p className="text-base-content/80 leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form + Office Info */}
      <section id="contact-form" className="py-20 bg-base-100">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="card bg-base-200 shadow-2xl">
            <div className="card-body p-10">
              <h3 className="text-3xl font-black mb-8 text-primary">Send Us a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input type="text" placeholder="Your Name" className="input input-bordered input-lg w-full" required />
                  <input type="email" placeholder="Your Email" className="input input-bordered input-lg w-full" required />
                </div>
                <input type="text" placeholder="Subject" className="input input-bordered input-lg w-full" required />
                <textarea 
                  placeholder="How can we help you? Please describe your issue or question..."
                  className="textarea textarea-bordered textarea-lg w-full h-48"
                  required
                ></textarea>
                <button className="btn btn-primary btn-lg w-full shadow-xl text-xl">
                  Send Message <FaArrowRight className="ml-3" />
                </button>
              </form>
            </div>
          </div>

         
          <div className="space-y-8">
            <div className="card bg-gradient-to-br from-primary to-secondary text-primary-content shadow-2xl p-10">
              <h3 className="text-3xl font-black mb-6 flex items-center gap-4">
                <FaMapMarkerAlt /> Visit Our Office
              </h3>
              <p className="text-lg leading-relaxed mb-6">
                Level-4, 34, Awal Centre<br/>
                Banani, Dhaka-1213<br/>
                Bangladesh
              </p>
              <div className="flex items-center gap-2 text-2xl mb-6">
                <FaStar className="text-yellow-300" />
                <FaStar className="text-yellow-300" />
                <FaStar className="text-yellow-300" />
                <FaStar className="text-yellow-300" />
                <FaStar className="text-yellow-300" />
                <span className="ml-3 text-xl font-bold">4.9/5 Customer Rating</span>
              </div>
              <p className="opacity-90">Based on 12,000+ verified reviews</p>
            </div>

            <div className="text-center">
              <p className="text-2xl font-bold text-primary mb-4">
                Average Response Time
              </p>
              <div className="text-6xl font-black text-success">Under 4 Hours</div>
              <p className="text-base-content/70 mt-4">We reply faster than most!</p>
            </div>
          </div>
        </div>
      </section>

  
      
    </div>
  );
};

export default Support;