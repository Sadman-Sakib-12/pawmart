import React from 'react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import image1 from '../assets/service3.jpg'
import image2 from '../assets/service2.jpg'
import image3 from '../assets/service1.jpg'

const Banner = () => {
    return (
        <Swiper className='rounded h-[400px]'
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}

        >
            <SwiperSlide>
                <div
                    className="hero h-[400px]"
                    style={{
                        backgroundImage: `url(${image1})`,
                    }}
                >
                    <div className="hero-overlay"></div>
                    <div className="hero-content text-neutral-content text-center">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-3xl font-bold">Find Your Furry Friend Today</h1>

                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide><div
                className="hero h-[400px] "
                style={{
                    backgroundImage: `url(${image2})`
                }}
            >
                <div className="hero-overlay"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-3xl font-bold">Adopt, Don’t Shop — Give a Pet a Home</h1>
                    </div>
                </div>
            </div>
            </SwiperSlide>
            <SwiperSlide><div
                className="hero h-[400px]"
                style={{
                    backgroundImage: `url(${image3})`,
                }}
            >
                <div className="hero-overlay"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-3xl font-bold">Because Every Pet Deserves Love and Care</h1>
                    </div>
                </div>
            </div>
            </SwiperSlide>
        </Swiper>
    )
}

export default Banner