import { useEffect, useRef, useState } from 'react'

// components

import { TopNav, Navbar, Hero, Testimonial, Footer, FindCar } from '../sections/index'
import { Button, Counter, LineAnimation, ListingCard, Modal, ScrollHeightTracker, SelectOption, VideoModal } from '../universalComponents'

// images
import { IMAGES } from '../../files'
// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faArrowRight, faCar, faPlay, faSearch, faUndo } from '@fortawesome/free-solid-svg-icons'

// react icons
import { HiOutlineClock, HiOutlineWrenchScrewdriver } from 'react-icons/hi2';
import { MdCheckCircleOutline, MdOutlineDirectionsCar, MdOutlinePhone, MdLocationOn } from 'react-icons/md'


import { PiCar, PiKey } from 'react-icons/pi';
import { carListings, carBodyTypes, carDealers, carBrands, sampleArticles } from '../../sampleData.js'
import { BlogCard } from '../universalComponents/Cards.jsx'
import { faAppStore, faGooglePlay } from '@fortawesome/free-brands-svg-icons'




export default function Home() {

    // find car form
    const [formData, setFormData] = useState({ carCondition: "", brand: "", model: "", year: "", milieage: "", priceRange: "", bodyType: "" })

    const [videoModalOpen, setVideoModalOpen] = useState(false)



    return (
        <div>


            <Hero />
            {/* find your perfect car */}
            <FindCar />


            {/* worlds largest car dealer market */}
            <div className="custom-container grid grid-cols-12 !mb-30 gap-y-10">
                {/* image col */}
                <div className="relative col-span-12 md-lg:col-span-6 px-10 max-w-[700px] mx-auto md-lg:max-w-auto">
                    <img src={IMAGES.Car_Banner_1} alt="Dealer ship" />

                    <div className="absolute top-0 left-[20px] flex items-center gap-x-2 bg-[var(--dark-color)] p-2.5 rounded-xl ">
                        {/* icon */}
                        <div className="flex relative text-white text-[20px] bg-[var(--theme-color)] px-2.5 py-2 rounded-xl">
                            <div className="absolute left-1/2 -translate-x-1/2 rounded-full h-[30px] w-[30px] border-2 bg-[var(--theme-color)] border-white flex items-center justify-center">
                                <HiOutlineWrenchScrewdriver />
                            </div>
                            <MdOutlineDirectionsCar className='text-[55px]' />
                        </div>
                        {/* text */}
                        <div className="text-wrap text-white max-w-[130px] font-bold text-[17px]">
                            30 Years Of Quality Service
                        </div>
                    </div>
                </div>

                {/* data col */}
                <div className="col-span-12 md-lg:col-span-6 px-5 sm:px-12 max-w-[700px] mx-auto md-lg:max-w-auto">
                    <div className="flex items-center gap-x-2 text-[var(--theme-color)] mb-1.5">
                        <FontAwesomeIcon icon={faCar} className='text-[18px]' />
                        <h4 className="tracking-[3px] font-bold  text-[17px]">ABOUT US</h4>
                    </div>
                    <h2 className="font-bold text-[var(--dark-color)] text-[35px] leading-[45px] md:leading-[55px] md:text-[45px]">World Largest <span className='text-[var(--theme-color)]'>Car Dealer</span> Marketplace.</h2>

                    <p className="text-[var(--body-text-color)] mt-5">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>

                    {/* list features */}
                    <ul className='mt-7 flex flex-col gap-y-3'>
                        <li className="flex gap-x-2">
                            <MdCheckCircleOutline className='text-[var(--theme-color)] text-[18px]' />
                            <span className='font-semibold body-text-color'>At vero eos et accusamus et iusto odio.</span>
                        </li>
                        <li className="flex gap-x-2">
                            <MdCheckCircleOutline className='text-[var(--theme-color)] text-[18px]' />
                            <span className='font-semibold body-text-color'>Established fact that a reader will be distracted.</span>
                        </li>
                        <li className="flex gap-x-2">
                            <MdCheckCircleOutline className='text-[var(--theme-color)] text-[18px]' />
                            <span className='font-semibold body-text-color'>Sed ut perspiciatis unde omnis iste natus sit.</span>
                        </li>
                    </ul>

                    <Button text={"Discover More"} icon={faArrowRight} className='mt-8 w-full xs:w-auto flex-row-reverse' hoverBg={'bg-[var(--dark-color)]'} />

                </div>
            </div>

            {/* stat counter section */}
            <div className="relative bg-[var(--theme-color)] py-[30px]">
                {/* bg pattern */}
                <div className="absolute inset-0 z-[10] opacity-20" style={{ backgroundImage: `url(${IMAGES.Bg_String_Pattern})`, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}></div>
                {/* data */}
                <div className="grid grid-cols-12 !gap-y-[30px] custom-container relative z-[12]">
                    {/* col 1 */}
                    <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 flex flex-col items-center gap-y-2">
                        <div className="h-[120px] w-[120px] rounded-full flex items-center justify-center border-5 border-white bg-black ">
                            <PiCar className='text-white text-[70px]' />
                        </div>
                        <Counter targetValue={500} duration={3000} className='text-white' />
                        <p className="text-white font-semibold text-[20px]">+ Available Cars</p>
                    </div>
                    {/* col 2 */}
                    <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 flex flex-col items-center gap-y-2">
                        <div className="h-[120px] w-[120px] rounded-full flex items-center justify-center border-5 border-white bg-black ">
                            <PiKey className='text-white text-[70px]' />
                        </div>
                        <Counter targetValue={900} duration={3000} className='text-white' />
                        <p className="text-white font-semibold text-[20px]">+ Happy Clients</p>
                    </div>
                    {/* col 3 */}
                    <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 flex flex-col items-center gap-y-2">
                        <div className="h-[120px] w-[120px] rounded-full flex items-center justify-center border-5 border-white bg-black ">
                            <HiOutlineWrenchScrewdriver className='text-white text-[70px]' />
                        </div>
                        <Counter targetValue={1500} duration={3000} className='text-white' />
                        <p className="text-white font-semibold text-[20px]">+ Team Workers</p>
                    </div>
                    {/* col 4 */}
                    <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 flex flex-col items-center gap-y-2">
                        <div className="h-[120px] w-[120px] rounded-full flex items-center justify-center border-5 border-white bg-black ">
                            <HiOutlineClock className='text-white text-[70px]' />
                        </div>
                        <Counter targetValue={30} duration={3000} className='text-white' />
                        <p className="text-white font-semibold text-[20px]">+ Years of Experience</p>
                    </div>
                </div>
            </div>

            {/* latest cars listings (cards) */}
            <div className="bg-[var(--theme-bg-light)] py-30">
                <div className="custom-container px-5">
                    <div className="flex items-center justify-center gap-x-2 text-[var(--theme-color)] mb-1.5">
                        <FontAwesomeIcon icon={faCar} className='text-sm sm:text-[18px]' />
                        <h4 className="tracking-[3px] font-bold text-sm sm:text-[17px] uppercase">New Arrivals</h4>
                    </div>

                    <h2 className="text-center font-bold text-[var(--dark-color)] text-[25px] leading-[30px] sm:text-[35px] sm:leading-[45px] md:leading-[55px] md:text-[45px]">Let's Check Latest <span className='text-[var(--theme-color)]'>Cars</span></h2>

                    {/* line animation */}
                    <LineAnimation />

                    {/* cards for cars */}
                    <div className="grid grid-cols-12 mt-12 gap-5">
                        {carListings?.map((car) => (
                            <div key={car._id} className="col-span-12 mx-auto sm:col-span-6 min-[900px]:!col-span-4 xl:!col-span-3">
                                <ListingCard data={car} />
                            </div>
                        ))}
                    </div>
                    <Button text={"Load More"} icon={faUndo} className='flex-row-reverse mx-auto mt-15' />
                </div>

            </div>

            {/* car body type */}
            <div className="bg-white py-30">

                <div className="custom-container px-5">
                    <div className="flex items-center justify-center gap-x-2 text-[var(--theme-color)] mb-1.5">
                        <FontAwesomeIcon icon={faCar} className='text-sm sm:text-[18px]' />
                        <h4 className="tracking-[3px] font-bold text-sm sm:text-[17px] uppercase">Car Category</h4>
                    </div>

                    <h2 className="text-center font-bold text-[var(--dark-color)] text-[25px] leading-[30px] sm:text-[35px] sm:leading-[45px] md:leading-[55px] md:text-[45px]">Car By Body <span className='text-[var(--theme-color)]'>Types</span></h2>

                    {/* animation */}
                    <LineAnimation />


                    {/* car body types */}
                    <div className="grid grid-cols-12 gap-5 mt-12">
                        {carBodyTypes.map((type) => (

                            <div key={type.title} className="col-span-6 sm:col-span-4 md:col-span-3 lg:col-span-2">

                                <div className="py-3 px-4 bg-white shadow-[1px_1px_35px_1px_rgba(0,0,0,0.05)] transition-all duration-500 cursor-pointer hover:-translate-y-[7px] rounded-2xl flex flex-col items-center gap-y-0 group">
                                    <img src={type.imageUrl} className='w-[120px] max-w-[100px]' alt="" />
                                    <p className="font-semibold text-[18px] text-[var(--dark-color)] group-hover:text-[var(--theme-color)] transition-colors duration-500">{type.title}</p>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>

            {/* video review */}
            <div className="py-70 relative" style={{ backgroundImage: `url(${IMAGES.Bg_Video})`, backgroundSize: "cover", backgroundPosition: "center" }}>
                <div className="absolute z-[10] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[62px] h-[62px] rounded-full flex items-center justify-center mx-auto pulse-animation-element"></div>

                <button
                    onClick={() => setVideoModalOpen(true)}
                    className="cursor-pointer relative z-[12] w-[70px] h-[70px] mx-auto flex items-center justify-center rounded-full bg-[var(--theme-color)]">
                    <FontAwesomeIcon icon={faPlay} className='text-white text-[20px]' />
                </button>

                <VideoModal isModalOpen={videoModalOpen} onClose={() => setVideoModalOpen(false)}>
                    <video src="https://youtu.be/o46Tk47_O40?si=Du0aieydUX9eGiI_"
                        muted controls
                        className='w-full h-full'
                    ></video>
                </VideoModal>


            </div>

            {/* car dealers */}
            <div className="bg-white py-30">
                <div className="custom-container px-5">
                    {/* label */}
                    <div className="flex items-center justify-center gap-x-2 text-[var(--theme-color)] mb-1.5">
                        <FontAwesomeIcon icon={faCar} className='text-sm sm:text-[18px]' />
                        <h4 className="tracking-[3px] font-bold text-sm sm:text-[17px] uppercase">Car Dealers</h4>
                    </div>
                    {/* heading */}
                    <h2 className="text-center font-bold text-[var(--dark-color)] text-[25px] leading-[30px] sm:text-[35px] sm:leading-[45px] md:leading-[55px] md:text-[45px]">Best Dealers In <span className='text-[var(--theme-color)]'>Your City</span></h2>

                    {/* animation */}
                    <LineAnimation />


                    <div className="grid grid-cols-12 gap-5 mt-16">
                        {carDealers.map((dealer) => (

                            <div key={dealer._id} className="col-span-12 mx-auto sm:col-span-6 md:col-span-4 lg:col-span-3">
                                <div className='h-full min-w-[230px] max-w-[350px] bg-white rounded-lg p-3 group/card shadow-[1px_1px_35px_1px_rgba(0,0,0,0.1)]'>

                                    {/* image */}
                                    <div className="relative overflow-clip rounded-lg bg-[#fff3f3]">
                                        <img src={dealer.imageUrl} alt="car 1" className='rounded-lg' />

                                        {/* no of listings available */}
                                        <div className={`absolute top-3 left-3 bg-[var(--theme-color)] rounded-md text-white px-2 py-1 font-medium text-[15px]`}>{dealer.availableListings.length || 23} Listings</div>
                                    </div>
                                    <div className='px-2 pt-2 grow-2'>
                                        {/* title */}
                                        <h5 className="font-bold text-[18px] text-[var(--dark-color)] hover:text-[var(--theme-color)] cursor-pointer transition-colors duration-300">{dealer.title}</h5>

                                        <div className="mt-2 flex flex-col gap-y-3">
                                            <div className="flex items-center gap-x-1">
                                                <MdLocationOn className='text-[var(--theme-color)] text-[22px]' />
                                                <span className="text-[var(--body-text-color)]">{dealer.address}</span>
                                            </div>

                                            <div className="flex items-center gap-x-1">
                                                <MdOutlinePhone className='text-[var(--theme-color)] text-[22px]' />
                                                <span className="text-[var(--body-text-color)]">{dealer.phone}</span>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>

            {/* dedicated to provide quality services */}
            <div className="py-30 bg-[var(--dark-color)]">
                <div className="custom-container grid grid-cols-12 gap-y-10 gap-x-5 px-5">
                    {/* col 1 data */}
                    <div className="col-span-12 md-lg:!col-span-6 max-w-[700px] mx-auto">
                        {/* label */}
                        <div className="flex items-center gap-x-2 text-white mb-1.5">
                            <FontAwesomeIcon icon={faCar} className='text-sm sm:text-[18px]' />
                            <h4 className="tracking-[3px] font-bold text-sm sm:text-[17px] uppercase">Why Choose Us</h4>
                        </div>
                        {/* heading */}
                        <h2 className="font-bold text-white text-[25px] leading-[30px] sm:text-[35px] sm:leading-[45px] md:leading-[55px] md:text-[45px] capitalize">We are dedicated <span className='text-[var(--theme-color)] capitalize'>to provide </span>quality service</h2>

                        <p className="text-white font-medium mt-5">There are many variations of passages available but the majority have suffered alteration in some form going to use a passage by injected humour randomised words which don't look even slightly believable.</p>

                        <img src={IMAGES.QualityServiceCar} alt="image" className='mt-15' />

                    </div>

                    {/* card col */}
                    <div className="col-span-12 md-lg:!col-span-6">

                        <div className="columns-1 sm:columns-2 ">
                            {/* card 1 */}
                            <div className="md-lg:mt-10 mb-5 rounded-xl bg-white p-4">
                                <div className="flex justify-between items-center">
                                    {/* icon */}
                                    <div className="h-[80px] w-[80px] rounded-full bg-[var(--theme-color)] flex items-center justify-center">
                                        <PiCar className='text-white text-[50px]' />
                                    </div>
                                    {/* count */}
                                    <p className="text-[60px] font-black outlined-text">01</p>
                                </div>

                                {/* content */}
                                <div>
                                    <h5 className="mt-3 text-[22px] font-semibold text-[var(--dark-color)]">Best Quality Cars</h5>
                                    <p className="text-[var(--body-text-color)] mt-3 leading-[27px]">There are many variations of the passages available but the majo have suffered fact that reader will be dist alteration.</p>
                                </div>
                            </div>
                            {/* card 2 */}
                            <div className="rounded-xl mb-5 bg-white p-4">
                                <div className="flex justify-between items-center">
                                    {/* icon */}
                                    <div className="h-[80px] w-[80px] rounded-full bg-[var(--theme-color)] flex items-center justify-center">
                                        <PiCar className='text-white text-[50px]' />
                                    </div>
                                    {/* count */}
                                    <p className="text-[60px] font-black outlined-text">03</p>
                                </div>

                                {/* content */}
                                <div>
                                    <h5 className="mt-3 text-[22px] font-semibold text-[var(--dark-color)]">Best Quality Cars</h5>
                                    <p className="text-[var(--body-text-color)] mt-3 leading-[27px]">There are many variations of the passages available but the majo have suffered fact that reader will be dist alteration.</p>
                                </div>
                            </div>
                            {/* card 3 */}
                            <div className="rounded-xl mb-5 bg-white p-4">
                                <div className="flex justify-between items-center">
                                    {/* icon */}
                                    <div className="h-[80px] w-[80px] rounded-full bg-[var(--theme-color)] flex items-center justify-center">
                                        <PiCar className='text-white text-[50px]' />
                                    </div>
                                    {/* count */}
                                    <p className="text-[60px] font-black outlined-text">02</p>
                                </div>

                                {/* content */}
                                <div>
                                    <h5 className="mt-3 text-[22px] font-semibold text-[var(--dark-color)]">Best Quality Cars</h5>
                                    <p className="text-[var(--body-text-color)] mt-3 leading-[27px]">There are many variations of the passages available but the majo have suffered fact that reader will be dist alteration.</p>
                                </div>
                            </div>
                            {/* card 4 */}
                            <div className="rounded-xl mb-5 bg-white p-4">
                                <div className="flex justify-between items-center">
                                    {/* icon */}
                                    <div className="h-[80px] w-[80px] rounded-full bg-[var(--theme-color)] flex items-center justify-center">
                                        <PiCar className='text-white text-[50px]' />
                                    </div>
                                    {/* count */}
                                    <p className="text-[60px] font-black outlined-text">04</p>
                                </div>

                                {/* content */}
                                <div>
                                    <h5 className="mt-3 text-[22px] font-semibold text-[var(--dark-color)]">Best Quality Cars</h5>
                                    <p className="text-[var(--body-text-color)] mt-3 leading-[27px]">There are many variations of the passages available but the majo have suffered fact that reader will be dist alteration.</p>
                                </div>
                            </div>
                        </div>

                    </div>


                </div>
            </div>

            {/* top quality brands */}
            <div className="bg-white py-30 px-5">

                <div className="custom-container">
                    <div className="flex items-center justify-center gap-x-2 text-[var(--theme-color)] mb-1.5">
                        <FontAwesomeIcon icon={faCar} className='text-sm sm:text-[18px]' />
                        <h4 className="tracking-[3px] font-bold text-sm sm:text-[17px] uppercase">Popular Brands</h4>
                    </div>

                    <h2 className="text-center font-bold text-[var(--dark-color)] text-[25px] leading-[30px] sm:text-[35px] sm:leading-[45px] md:leading-[55px] md:text-[45px]">Our Top Quality <span className='text-[var(--theme-color)]'>Brands</span></h2>

                    {/* animation */}
                    <LineAnimation />

                    {/* car brands */}
                    <div className="grid grid-cols-12 gap-5 mt-12">
                        {carBrands.map((type) => (

                            <div key={type.title} className="col-span-6 sm:col-span-4 md:col-span-3 lg:col-span-2">

                                <div className="py-5 px-3 bg-[var(--theme-bg-light)] transition-all duration-500 cursor-pointer hover:-translate-y-[7px] rounded-2xl flex flex-col items-center gap-y-0 group">
                                    <img src={type.imageUrl} className='w-[150px] max-w-[150px]' alt="" />
                                    <p className="font-semibold text-[18px] text-[var(--dark-color)] group-hover:text-[var(--theme-color)] transition-colors duration-500">{type.title}</p>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>

            {/* testimonials section */}
            <div className="py-30 bg-[var(--theme-bg-light)]">
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

            {/* latest blogs */}
            <div className="py-30 px-5">
                <div className="custom-container">
                    {/* label */}
                    <div className="flex items-center justify-center gap-x-2 text-[var(--theme-color)] mb-1.5">
                        <FontAwesomeIcon icon={faCar} className='text-sm sm:text-[18px]' />
                        <h4 className="tracking-[3px] font-bold text-sm sm:text-[17px] uppercase">Our Blog</h4>
                    </div>
                    {/* heading */}
                    <h2 className="text-center font-bold text-[var(--dark-color)] text-[25px] leading-[30px] sm:text-[35px] sm:leading-[45px] md:leading-[55px] md:text-[45px]">Latest News & <span className='text-[var(--theme-color)]'>Blog</span></h2>

                    {/* animation */}
                    <LineAnimation />

                    {/* blogs cards */}
                    <div className="grid grid-cols-12 gap-5 mt-13">
                        {sampleArticles?.map((blog) => (
                            <div key={blog._id} className="col-span-12 mx-auto sm:col-span-6 md-lg:!col-span-4">
                                <BlogCard data={blog} />
                            </div>
                        ))}
                    </div>

                </div>
            </div>

            {/* cta */}
            <div className="px-5 mb-30 py-0">
                <div className="custom-container overflow-clip relative rounded-xl bg-[var(--theme-bg-light)]">
                    {/* pattern */}
                    <div className="absolute inset-0 z-[10] opacity-5" style={{ backgroundImage: `url(${IMAGES.Bg_String_Pattern_2})`, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}></div>

                    <div className="relative !overflow-visible z-[12] grid grid-cols-12 gap-y-10 px-12 py-9">
                        {/* col 1 */}
                        <div className="col-span-12 md-lg:!col-span-5 max-w-[500px] mx-auto">
                            {/* label */}
                            <div className="flex items-center gap-x-2 text-[var(--theme-color)] mb-1.5">
                                <FontAwesomeIcon icon={faCar} className='text-sm sm:text-[18px]' />
                                <h4 className="tracking-[3px] font-bold text-sm sm:text-[17px] uppercase">Our Blog</h4>
                            </div>
                            {/* heading */}
                            <h2 className="font-bold text-[var(--dark-color)] text-[25px] leading-[30px] sm:text-[35px] sm:leading-[45px] md:leading-[55px] md:text-[45px]">Download <span className='text-[var(--theme-color)]'>Our Motex</span> App For Free </h2>

                            <p className="text-[var(--body-text-color)] mt-4">There are many variations of passages available but the majority have suffered in some form going to use a passage by injected humour.</p>

                            {/* call to action buttons */}
                            <div className="flex flex-wrap min-[500px]:flex-nowrap gap-y-4 items-center gap-x-3 mt-8">

                                {/* play store cta */}
                                <button className="w-full min-[500px]:w-auto cursor-pointer bg-[var(--theme-color)] hover:bg-[var(--dark-color)] transition-all duration-500 flex items-center justify-center gap-x-2 px-5 py-2.5 rounded-lg">
                                    <FontAwesomeIcon icon={faGooglePlay} className='text-white text-[35px]' />
                                    <div className="flex flex-col gap-1 items-start">
                                        <span className="text-white capitalize text-sm font-medium">Get it on</span>
                                        <p className="font-bold text-white">Google Play</p>
                                    </div>
                                </button>

                                {/* app store cta */}
                                <button className="w-full min-[500px]:w-auto hover:bg-[var(--theme-color)] cursor-pointer bg-[var(--dark-color)] transition-all duration-500 flex items-center justify-center gap-x-2 px-5 py-2.5 rounded-lg">
                                    <FontAwesomeIcon icon={faAppStore} className='text-white text-[35px]' />
                                    <div className="flex flex-col gap-1 items-start">
                                        <span className="text-white capitalize text-sm font-medium">Get it on</span>
                                        <p className="font-bold text-white">App Store</p>
                                    </div>
                                </button>
                            </div>
                        </div>

                        {/* col 2 */}
                        <div className="col-span-12 md-lg:!col-span-7">
                            <div className="relative md-lg:!absolute bottom-0 md-lg:!translate-y-[100px]">
                                <img src={IMAGES.MobilesImage_CTA} alt="image" className='scale-105' />
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}
