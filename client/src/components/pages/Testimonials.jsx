import { faAngleDoubleRight, faCar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { IMAGES } from '../../files'
import { Testimonial } from '../sections'
import { LineAnimation } from '../universalComponents'

export default function Testimonials() {
    return (
        <div>
            {/* hero */}
            <div className="py-40 relative before:absolute before:inset-0 before:bg-[#01060F] before:opacity-80" style={{ backgroundImage: `url(${IMAGES.Inventory_Hero_Bg})`, backgroundPosition: "center", backgroundSize: "cover" }}>
                {/* content */}
                <div className="relative z-10">
                    <h1 className="text-center text-white font-bold text-[40px]">Testimonials</h1>
                    <p className="text-white font-medium mt-2 flex items-center justify-center">
                        Home
                        <FontAwesomeIcon icon={faAngleDoubleRight} className='mx-1' />
                        <span className='text-[var(--theme-color)]'>Testimonials</span></p>
                </div>
            </div>


            {/* testimonial */}
            <div className="px-5 py-30 bg-[var(--theme-bg-light)]">
                {/* label */}
                <div className="flex items-center justify-center gap-x-2 text-[var(--theme-color)] mb-1.5">
                    <FontAwesomeIcon icon={faCar} className='text-sm sm:text-[18px]' />
                    <h4 className="tracking-[3px] font-bold text-sm sm:text-[17px] uppercase">Testimonials</h4>
                </div>
                {/* heading */}
                <h2 className="text-center font-bold text-[var(--dark-color)] text-[25px] leading-[30px] sm:text-[35px] sm:leading-[45px] md:leading-[55px] md:text-[45px]">What Our Client <span className='text-[var(--theme-color)]'>Say's</span></h2>

                {/* animation */}
                <LineAnimation />


                {/* testimonials */}
                {/* card */}
                <div className="custom-container !mt-30 px-5">
                    <Testimonial />
                </div>
            </div>
        </div>
    )
}
