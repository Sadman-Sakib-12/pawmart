import React from 'react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Banner = () => {
    return (
        <Swiper className='rounded h-[300px]'
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
                modules={[Autoplay,Pagination, Navigation]} 
              
            >
                <SwiperSlide>
                    <div
                    className="hero h-[300px]"
                    style={{
                        backgroundImage:`url(${''})`,
                    }}
                >
                    <div className="hero-overlay"></div>
                    <div className="hero-content text-neutral-content text-center">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">Meet Buddy</h1>
                            <p className="mb-5 text-lg">
                                Buddy loves long walks in the park and playing fetch.he' very friendly and loyal. 
                            </p>
                        </div>
                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide><div
                    className="hero h-[300px] "
                    style={{
                        backgroundImage:`url(${''})`
                    }}
                >
                    <div className="hero-overlay"></div>
                    <div className="hero-content text-neutral-content text-center">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">This is Bella</h1>
                            <p className="mb-5 text-lg">
                               Bella enjoys cuddles and is great with children. she's playful and full of energy.
                            </p>
                        </div>
                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide><div
                    className="hero h-[300px]"
                    style={{
                       backgroundImage:`url(${''})`,
                    }}
                >
                    <div className="hero-overlay"></div>
                    <div className="hero-content text-neutral-content text-center">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">Say Hi to Max</h1>
                            <p className="mb-5 text-lg">
                            Max is a calm and intelligent dog, perfect for families looking for a gentle comanion 
                            </p>
                        </div>
                    </div>
                </div>
                </SwiperSlide>
            </Swiper>
    )
}

export default Banner