import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';


import 'swiper/css';

import { IMAGES } from '../../../files';
import { Button } from '../../universalComponents';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRef } from 'react';

export default function Hero() {

    const swiperRef = useRef()


    return (
        <div className='relative'>

            <Swiper
                modules={[Autoplay]}
                spaceBetween={0}
                loop
                // autoplay={{ delay: 5000 }}
                slidesPerView={1}
                onSwiper={(swiper) => swiperRef.current = swiper}
            >
                <SwiperSlide>
                    <div className="relative py-25 md-lg:py-37" style={{ backgroundImage: `url(${IMAGES.Slider_1})`, backgroundRepeat: 'no-repeat', backgroundSize: "cover", backgroundPosition: "center" }}>
                        <div className="bg-overlay absolute z-[10] inset-0 bg-[rgba(0,0,0,0.8)]"></div>

                        <div className="custom-container relative z-[12] px-6 grid grid-cols-12 gap-y-20 ">
                            {/* data col */}
                            <div className="relative z-[13] col-span-12 md-lg:col-span-6">
                                <div className=" flex flex-col gap-y-4 max-w-[600px] mx-auto">
                                    <h4 className="heading-font text-[var(--theme-color)] font-[800] text-[17px] lg:text-[20px] tracking-[7px]">WELCOME TO MOTEX!</h4>
                                    <h1 className="heading-font font-[800] mt-1 text-white text-[36px] sm:text-[48px] lg:text-[60px] leading-[44px] sm:leading-[55px] lg:leading-[70px]">Best Way To Find Your <span className='text-[var(--theme-color)]'>Dream</span> Car</h1>
                                    <p className="text-white leading-loose mt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, dolore repudiandae expedita iure cum sed. Perferendis et beatae eum odit.</p>

                                    <div className="flex flex-col xs:flex-row gap-y-5 items-center mt-6 gap-x-5">
                                        <Button text={"About More"} icon={faArrowRight} className='w-full xs:w-auto flex-row-reverse' hoverBg={'bg-[var(--dark-color)]'} />
                                        <Button text={"Learn More"} icon={faArrowRight} className='w-full xs:w-auto flex-row-reverse !text-[var(--theme-color)] hover:!text-white' hoverBg={'bg-[var(--theme-color)]'} bgColor='bg-white' />
                                    </div>
                                </div>
                            </div>
                            {/* image col */}
                            <div className="col-span-12 md-lg:col-span-6 flex items-center justify-center">
                                <div className="absolute z-[10] h-[700px] w-[700px] rounded-full"
                                    style={{
                                        background: "radial-gradient(circle, #b31313 0%, transparent 70%)"
                                    }}
                                ></div>
                                <div className="relative max-w-[600px] md-lg:max-w-auto z-[12] px-4 md-lg:px-2">
                                    <img src={IMAGES.Hero_1} className='md-lg:scale-110' alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="relative py-25 md-lg:py-37" style={{ backgroundImage: `url(${IMAGES.Slider_2})`, backgroundRepeat: 'no-repeat', backgroundSize: "cover", backgroundPosition: "center" }}>
                        <div className="bg-overlay absolute z-[10] inset-0 bg-[rgba(0,0,0,0.8)]"></div>

                        <div className="custom-container relative z-[12] px-6 grid grid-cols-12 gap-y-20 ">
                            {/* data col */}
                            <div className="relative z-[13] col-span-12 md-lg:col-span-6">
                                <div className=" flex flex-col gap-y-4 max-w-[600px] mx-auto">
                                    <h4 className="heading-font text-[var(--theme-color)] font-[800] text-[17px] lg:text-[20px] tracking-[7px]">WELCOME TO MOTEX!</h4>
                                    <h1 className="heading-font font-[800] mt-1 text-white text-[36px] sm:text-[48px] lg:text-[60px] leading-[44px] sm:leading-[55px] lg:leading-[70px]">Best Way To Find Your <span className='text-[var(--theme-color)]'>Dream</span> Car</h1>
                                    <p className="text-white leading-loose mt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, dolore repudiandae expedita iure cum sed. Perferendis et beatae eum odit.</p>

                                    <div className="flex flex-col xs:flex-row gap-y-5 items-center mt-6 gap-x-5">
                                        <Button text={"About More"} icon={faArrowRight} className=' w-full xs:w-auto flex-row-reverse' hoverBg={'bg-[var(--dark-color)]'} />
                                        <Button text={"Learn More"} icon={faArrowRight} className='w-full xs:w-auto flex-row-reverse !text-[var(--theme-color)] hover:!text-white' hoverBg={'bg-[var(--theme-color)]'} bgColor='bg-white' />
                                    </div>
                                </div>
                            </div>
                            {/* image col */}
                            <div className="col-span-12 md-lg:col-span-6 flex items-center justify-center">
                                <div className="absolute z-[10] h-[700px] w-[700px] rounded-full"
                                    style={{
                                        background: "radial-gradient(circle, #b31313 0%, transparent 70%)"
                                    }}
                                ></div>
                                <div className="relative max-w-[600px] md-lg:max-w-auto z-[12] px-4 md-lg:px-2">
                                    <img src={IMAGES.Hero_2} className='md-lg:scale-110' alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="relative py-25 md-lg:py-37" style={{ backgroundImage: `url(${IMAGES.Slider_3})`, backgroundRepeat: 'no-repeat', backgroundSize: "cover", backgroundPosition: "center" }}>
                        <div className="bg-overlay absolute z-[10] inset-0 bg-[rgba(0,0,0,0.8)]"></div>

                        <div className="custom-container relative z-[12] px-6 grid grid-cols-12 gap-y-20 ">
                            {/* data col */}
                            <div className="relative z-[13] col-span-12 md-lg:col-span-6">
                                <div className=" flex flex-col gap-y-4 max-w-[600px] mx-auto">
                                    <h4 className="heading-font text-[var(--theme-color)] font-[800] text-[17px] lg:text-[20px] tracking-[7px]">WELCOME TO MOTEX!</h4>
                                    <h1 className="heading-font font-[800] mt-1 text-white text-[36px] sm:text-[48px] lg:text-[60px] leading-[44px] sm:leading-[55px] lg:leading-[70px]">Best Way To Find Your <span className='text-[var(--theme-color)]'>Dream</span> Car</h1>
                                    <p className="text-white leading-loose mt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, dolore repudiandae expedita iure cum sed. Perferendis et beatae eum odit.</p>

                                    <div className="flex flex-col xs:flex-row gap-y-5 items-center mt-6 gap-x-5">
                                        <Button text={"About More"} icon={faArrowRight} className=' w-full xs:w-auto flex-row-reverse' hoverBg={'bg-[var(--dark-color)]'} />
                                        <Button text={"Learn More"} icon={faArrowRight} className='w-full xs:w-auto flex-row-reverse !text-[var(--theme-color)] hover:!text-white' hoverBg={'bg-[var(--theme-color)]'} bgColor='bg-white' />
                                    </div>
                                </div>
                            </div>
                            {/* image col */}
                            <div className="col-span-12 md-lg:col-span-6 flex items-center justify-center">
                                <div className="absolute z-[10] h-[700px] w-[700px] rounded-full"
                                    style={{
                                        background: "radial-gradient(circle, #b31313 0%, transparent 70%)"
                                    }}
                                ></div>
                                <div className="relative max-w-[600px] md-lg:max-w-auto z-[12] px-4 md-lg:px-2">
                                    <img src={IMAGES.Hero_4} className='md-lg:scale-110' alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper >
            {/* navigation buttons */}
            <div className="hidden sm:block">
                <button aria-label='slide prev'
                    onClick={() => swiperRef?.current?.slidePrev()}
                    className={`absolute z-[13] top-1/2 -translate-y-1/2 left-[40px] btn swiper-btn rounded-full flex items-center justify-center cursor-pointer w-[55px] h-[55px] group/button bg-white/20 hover:bg-white transition-all duration-400 ms-1 rounded-0`}>
                    <FontAwesomeIcon icon={faArrowLeft} className='text-white group-hover/button:text-[var(--theme-color)] text-[20px] transition-colors duration-500' />
                </button>
                <button aria-label='slide prev'
                    onClick={() => swiperRef?.current?.slideNext()}
                    className={`absolute z-[13] top-1/2 -translate-y-1/2 right-[40px] btn swiper-btn rounded-full flex items-center justify-center cursor-pointer w-[55px] h-[55px] group/button bg-white/20 hover:bg-white transition-all duration-400 ms-1 rounded-0`}>
                    <FontAwesomeIcon icon={faArrowRight} className='text-white group-hover/button:text-[var(--theme-color)] text-[20px] transition-colors duration-500' />
                </button>
            </div>
        </div>
    );
};