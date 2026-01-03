import React from 'react';
import { Link } from 'react-router';
import { FaClock, FaUser, FaTag, FaCalendarAlt, FaSearch, FaPaw, FaArrowRight, FaEnvelope } from 'react-icons/fa';

const Blog = () => {

  const blogPosts = [
    {
      id: 1,
      title: "Top 10 Premium Dog Food Brands for 2026",
      excerpt: "Expert-reviewed list of the best quality dog foods available in Bangladesh. Recommendations based on veterinary nutrition standards and real pet parent feedback...",
      author: "Dr. Sarah Rahman",
      date: "January 02, 2026",
      category: "Pet Nutrition",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1548767793-5a4a3e37c9f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      featured: true
    },
    {
      id: 2,
      title: "Understanding Your Cat: 15 Key Behavior Signals",
      excerpt: "What is your cat trying to tell you? Tail movements, ear positions, eye contact — decode feline body language like a pro...",
      author: "Ayesha Khan",
      date: "December 28, 2025",
      category: "Cat Care",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: 3,
      title: "Summer Pet Care: Preventing Heatstroke in Dogs & Cats",
      excerpt: "Essential tips to keep your pets safe during Bangladesh's intense summer heat. Signs of heatstroke and emergency cooling methods...",
      author: "Vet. Md. Karim",
      date: "December 20, 2025",
      category: "Health Tips",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1568640347023-d7c1e3b7e15f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: 4,
      title: "Ultimate Guide to Choosing the Perfect Bird Cage (2026)",
      excerpt: "Complete buying guide: size, material, bar spacing, and design features for different bird species...",
      author: "Rahim Hossain",
      date: "December 15, 2025",
      category: "Bird Care",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1452570053594-1b985d6ea890?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    }
  ];

  const categories = ["Pet Nutrition", "Cat Care", "Dog Training", "Health Tips", "Bird Care", "Fish Aquarium", "Grooming"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-base-200 via-base-100 to-base-200">
     
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/90"></div>
        <div className="absolute inset-0 bg-black/40"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1548767793-5a4a3e37c9f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')" }}
        ></div>
        
        <div className="relative max-w-7xl mx-auto px-6 text-center text-primary-content">
          <div className="inline-flex items-center gap-4 bg-white/20 backdrop-blur-xl px-8 py-4 rounded-full mb-8 border border-white/30">
            <FaPaw className="text-3xl animate-pulse" />
            <span className="text-2xl font-bold tracking-wider">PawMart Blog</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight drop-shadow-2xl">
            Expert Pet Care Guides
            <span className="block text-yellow-300 mt-2">Trusted by Pet Parents</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-95 max-w-3xl mx-auto leading-relaxed">
            Articles, tips, and guides written by veterinarians and experienced pet owners
          </p>
        </div>
      </section>

      {/* Featured Post - Premium Highlight */}
     

      {/* Blog Grid + Sidebar */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12">
          {/* Main Posts */}
          <div className="lg:col-span-2 space-y-12">
            <h2 className="text-4xl font-black text-primary mb-10 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Latest Articles
            </h2>
            
            {blogPosts.slice(1).map((post) => (
              <article key={post.id} className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group">
                <div className="grid md:grid-cols-3">
                  <div className="md:col-span-1">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-64 md:h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="md:col-span-2 p-8">
                    <div className="flex items-center gap-4 text-sm text-base-content/70 mb-4">
                      <span className="flex items-center gap-1">
                        <FaTag /> {post.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <FaClock /> {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition">
                      {post.title}
                    </h3>
                    <p className="text-base-content/80 mb-6 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 text-sm">
                        <div className="avatar">
                          <div className="w-8 rounded-full ring ring-primary ring-offset-2">
                            <img src="https://i.pravatar.cc/100?img=1" alt="Author" />
                          </div>
                        </div>
                        <span>{post.author}</span>
                        <span className="text-base-content/60">• {post.date}</span>
                      </div>
                      <Link to={`/blog/${post.id}`} className="btn btn-primary btn-outline btn-sm gap-2">
                        Read More <FaArrowRight />
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Sidebar */}
          <aside className="space-y-8">
            {/* Search */}
            <div className="card bg-base-100 shadow-xl p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                <FaSearch /> Search Articles
              </h3>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search tips, guides..." 
                  className="input input-bordered input-lg w-full pr-12"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 btn btn-primary btn-circle">
                  <FaSearch />
                </button>
              </div>
            </div>

            {/* Categories */}
            <div className="card bg-base-100 shadow-xl p-6">
              <h3 className="text-xl font-bold mb-6">Categories</h3>
              <div className="space-y-3">
                {categories.map((cat, i) => (
                  <Link 
                    key={i}
                    to={`/blog/category/${cat.toLowerCase().replace(' ', '-')}`}
                    className="flex items-center justify-between p-4 rounded-xl hover:bg-primary/10 transition group"
                  >
                    <span className="font-medium group-hover:text-primary">{cat}</span>
                    <span className="text-sm text-base-content/60">(12)</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="card bg-gradient-to-br from-primary to-secondary text-primary-content shadow-2xl p-8 text-center">
              <FaPaw className="text-5xl mx-auto mb-4 opacity-80" />
              <h3 className="text-2xl font-black mb-4">Weekly Pet Tips!</h3>
              <p className="mb-6 opacity-90">Get the best pet care advice delivered to your inbox every week</p>
              <input 
                type="email" 
                placeholder="Your email address" 
                className="input input-lg w-full mb-4 text-base-100"
              />
              <button className="btn btn-neutral btn-lg w-full shadow-xl">
                Subscribe Now
              </button>
            </div>
          </aside>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-primary-content">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Have a Pet Care Question?
          </h2>
          <p className="text-xl opacity-90 mb-10">
            Contact our experts or suggest a topic for our next article
          </p>
          <Link to="/contact" className="btn btn-lg btn-neutral shadow-2xl text-xl px-12">
            Write to Us <FaEnvelope className="ml-3" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Blog;