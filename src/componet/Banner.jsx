import React from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { FaPaw, FaHeart, FaHome, FaArrowRight, FaShieldAlt } from 'react-icons/fa';
import { Link } from 'react-router';
import image1 from '../assets/service3.jpg';
import image2 from '../assets/service2.jpg';
import image3 from '../assets/service1.jpg';

const slides = [
  {
    image: image1,
    title: "Find Your Perfect Companion",
    subtitle: "Thousands of loving pets waiting for their forever home",
    cta: "Browse Pets",
    link: "/pets-supplies",
  
  },
  {
    image: image2,
    title: "Adopt, Don't Shop",
    subtitle: "Give a rescued pet a second chance at happiness",
    cta: "Start Adoption Journey",
    link: "/pets-supplies",
  
  },
  {
    image: image3,
    title: "Every Pet Deserves Love",
    subtitle: "Join 15,000+ happy families who found their best friend here",
    cta: "Explore Now",
    link: "/pets-supplies",

  }
];

const Banner = () => {
  return (
    <section className="relative mt-4 pt-5">
      <Swiper
        className="h-[60vh] md:h-[70vh] rounded-none"
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={true}
        loop={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="hero h-full relative"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="hero-content text-center text-primary-content relative z-10 max-w-5xl mx-auto px-6">
                <div className="max-w-4xl">
             
                  <div className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-md px-8 py-4 rounded-full shadow-xl mb-8 border border-white/20">
                    <FaPaw className="text-4xl animate-pulse" />
                    <span className="text-2xl font-bold tracking-wider">PawMart</span>
                  </div>
                  <h1 className="text-3xl md:text-4xl lg:text-4xl font-black mb-6 leading-tight drop-shadow-2xl">
                    {slide.title.split(' ').map((word, i) => (
                      <span key={i} className="inline-block">
                        {word}{' '}
                      </span>
                    ))}
                  </h1>
                  <p className="text-xl md:text-3xl opacity-95 mb-12 leading-relaxed font-medium max-w-3xl mx-auto">
                    {slide.subtitle}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                    <Link
                      to={slide.link}
                      className="btn btn-lg btn-neutral shadow-2xl hover:shadow-neutral/50 text-xl px-12 rounded-full bg-white text-base-content hover:bg-white/90 border-0 font-bold"
                    >
                      <span className="flex items-center gap-4">
                        {slide.cta}
                        <FaArrowRight className="text-2xl" />
                      </span>
                    </Link>

                    <Link
                      to="/about"
                      className="btn btn-lg btn-outline btn-primary shadow-2xl hover:shadow-primary/50 text-xl px-12 rounded-full border-4 border-white/40 hover:border-white font-bold"
                    >
                      <FaHeart className="text-2xl" />
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Banner;