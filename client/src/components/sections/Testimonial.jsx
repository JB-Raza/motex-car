import { useEffect, useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

// components
import { testimonialData } from '../../sampleData';
import { TestimonialCard } from '../universalComponents/Cards';

export default function Testimonial() {
    const swiperRef = useRef()
    const [activeIndex, setActiveIndex] = useState(0)
    const [slidesPerView, setSlidesPerView] = useState(4)

    useEffect(() => {
        const swiper = swiperRef.current
        if (!swiper) return

        function updateSlidesPerView() {
            setSlidesPerView(swiper.params.slidesPerView)
        }

        updateSlidesPerView()

        swiper.on('resize', updateSlidesPerView)

        return () => {
            swiper.off('resize', updateSlidesPerView)
        }
    }, [])

    const totalGroups = Math.ceil(testimonialData.length / slidesPerView);

    return (
        <div className='testimonial-swiper'>
            <Swiper
                modules={[Autoplay]}
                spaceBetween={20}
                loop
                autoplay={{ delay: 5000 }}
                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                breakpoints={{
                    0: { slidesPerView: 1 },
                    500: { slidesPerView: 2 },
                    780: { slidesPerView: 3 },
                    980: { slidesPerView: 4 },
                }}
                onSwiper={(swiper) => swiperRef.current = swiper}
                className='cursor-grab'>

                {testimonialData?.map((testimonial, index) => (
                    <SwiperSlide key={index} className='!h-full flex !overflow-visible'>
                        <TestimonialCard testimonial={testimonial} />
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* pagination buttons */}
            <div className="flex justify-center gap-2 mt-12">
                {Array.from({ length: totalGroups }).map((_, index) => (
                    <button
                        key={index}
                        onClick={() => swiperRef.current?.slideTo(index)}
                        className={`outline-none h-[7px] w-[7px] rounded-full transition-all duration-300 bg-[var(--theme-color)] ${index === activeIndex ? 'w-[18px]' : ''
                            }`}
                    />
                ))}
            </div>
        </div>
    )
}
