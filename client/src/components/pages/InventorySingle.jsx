import { useEffect, useRef, useState } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'
import 'swiper/css';

// rating
import Rating from 'react-rating'


// icon
import { faAngleDoubleRight, faAngleLeft, faAngleRight, faArrowRight, faGaugeHigh, faLocationDot, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IMAGES } from '../../files'
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { Button, InputBox, ListingCard } from '../universalComponents'
import { FaRegClock, FaRegEye, FaRegStar, FaStar } from 'react-icons/fa'
import { MdOutlineCheckCircle, MdOutlineDirectionsCar, MdOutlineSpeed } from "react-icons/md";
import { TfiSettings } from "react-icons/tfi";
import { LuFuel } from "react-icons/lu";
import { BsReply } from "react-icons/bs";
import { carListings } from '../../sampleData';
import { useParams } from 'react-router';






export default function InventorySingle() {
    const swiperRef = useRef()
    const swiperRef2 = useRef()
    const [currIndex, setCurrIndex] = useState(0)
    const [listing, setListing] = useState(carListings[0])

    const { listingId } = useParams()
    if (!listingId) return

    useEffect(() => {
        let data = carListings.find(l => l._id == listingId)
        if (!data) return
        setListing(data)
    }, [listingId])

    // reviews
    const [reviewData, setReviewData] = useState({ rating: "", comment: "" })

    useEffect(() => {
        swiperRef.current?.slideTo(currIndex)
    }, [currIndex])

    function handleInputChange(e) {
        const { name, value } = e.target
        setReviewData(prev => ({
            ...prev,
            [name]: value
        }))
    }



    return (
        <div className='bg-[#F9F9F9]'>
            {/* hero */}
            <div className="py-40 relative before:absolute before:inset-0 before:bg-[#01060F] before:opacity-80" style={{ backgroundImage: `url(${IMAGES.Inventory_Hero_Bg})`, backgroundPosition: "center", backgroundSize: "cover" }}>
                {/* content */}
                <div className="relative z-10">
                    <h1 className="text-center text-white font-bold text-[40px]">Inventory Single</h1>
                    <p className="text-white font-medium mt-2 flex items-center justify-center">
                        Home
                        <FontAwesomeIcon icon={faAngleDoubleRight} className='mx-1' />
                        <span className='text-[var(--theme-color)]'>Inventory Single</span></p>
                </div>
            </div>
            {/* listing details */}
            <div className="grid grid-cols-12 custom-container py-25 gap-y-7 md:gap-x-7 px-5">
                {/* col 1 */}
                <div className="col-span-12 md-lg:!col-span-8 flex flex-col gap-y-5">

                    {/* slider */}
                    <div className="py-4 px-3 xs:px-5 xs:py-4 bg-white rounded-xl">
                        {/* car condition */}
                        <p className={`text-[11px] sm:text-sm font-medium py-1 px-3 text-white uppercase w-max rounded-md mb-2 ${listing.highlightInfo.condition == "used" ? "bg-[var(--theme-color)]" : "bg-green-500"}`}>{listing.highlightInfo.condition}</p>

                        {/* title */}
                        <h3 className="text-[23px] sm:text-[28px] font-semibold mb-3">{listing.title}</h3>

                        <div className="flex items-center flex-wrap gap-x-4">
                            {/* listed on */}
                            <div className="flex items-center gap-x-1">
                                <FaRegClock className='text-sm sm:text-[16px] text-[var(--theme-color)]' />
                                <p className="text-sm sm:text-[16px] text-[var(--body-text-color)]">Listed On: Sat, Jan 25, 2023</p>
                            </div>
                            {/* views */}
                            <div className="flex items-center gap-x-1">
                                <FaRegEye className='text-sm sm:text-[16px] text-[var(--theme-color)]' />
                                <p className="text-sm sm:text-[16px] text-[var(--body-text-color)]"> Views: 850</p>
                            </div>
                        </div>

                        {/* images of cars */}
                        <div className='mt-7 relative group/navigation-btn'>
                            <Swiper
                                modules={[Autoplay]}
                                autoplay={{ delay: 4000 }}
                                spaceBetween={0}
                                slidesPerView={1}
                                onSlideChange={(swiper) => setCurrIndex(swiper.activeIndex)}
                                onSwiper={(swiper) => swiperRef.current = swiper}
                            >
                                {(listing.images || []).map((image, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="rounded-2xl overflow-clip">
                                            <img src={image} alt="" className='w-full' />
                                        </div>
                                    </SwiperSlide>
                                ))}

                            </Swiper>

                            {/* navigation buttons */}
                            <div className="">
                                <button aria-label='slide prev'
                                    onClick={() => swiperRef?.current?.slidePrev()}
                                    className={`opacity-0 invisible group-hover/navigation-btn:opacity-100 group-hover/navigation-btn:visible transition-all duration-500 absolute z-[13] top-1/2 -translate-y-1/2 left-[20px] btn swiper-btn rounded-full flex items-center justify-center cursor-pointer w-[40px] h-[40px] group/button bg-[rgba(0,0,0,0.5)] ms-1`}>
                                    <FontAwesomeIcon icon={faAngleLeft} className='text-white text-[20px] ' />
                                </button>
                                <button aria-label='slide prev'
                                    onClick={() => swiperRef?.current?.slideNext()}
                                    className={`opacity-0 invisible group-hover/navigation-btn:opacity-100 group-hover/navigation-btn:visible transition-all duration-500 absolute z-[13] top-1/2 -translate-y-1/2 right-[20px] btn swiper-btn rounded-full flex items-center justify-center cursor-pointer w-[40px] h-[40px] group/button bg-[rgba(0,0,0,0.5)] ms-1`}>
                                    <FontAwesomeIcon icon={faAngleRight} className='text-white text-[20px]' />
                                </button>
                            </div>
                        </div>

                        {/* images pagination button swiper */}
                        <div className="wrapper relative mt-5">

                            <Swiper
                                spaceBetween={8}
                                slidesPerView={4}
                                breakpoints={{
                                    0: { slidesPerView: 2 },
                                    500: { slidesPerView: 3 },
                                    700: { slidesPerView: 4 },
                                }}
                                onSwiper={(swiper) => swiperRef2.current = swiper}
                            >
                                {(listing.images || []).map((image, index) => (
                                    <SwiperSlide key={index} className={`max-w-[185px] max-h-[120px]`}>
                                        <div
                                            onClick={() => setCurrIndex(index)}
                                            className={`rounded-lg overflow-clip `}>
                                            <img src={image} className='w-full max-h-[120px]' alt="" />
                                        </div>
                                    </SwiperSlide>
                                ))}


                            </Swiper>

                            {/* navigation buttons for swiper 2 */}
                            <div className="">
                                <button aria-label='slide prev'
                                    onClick={() => swiperRef2?.current?.slidePrev()}
                                    className={`absolute z-[13] top-1/2 -translate-y-1/2 left-[10px] btn swiper-btn rounded-full flex items-center justify-center cursor-pointer w-[40px] h-[40px] group/button bg-[rgba(0,0,0,0.5)] ms-1`}>
                                    <FontAwesomeIcon icon={faAngleLeft} className='text-white text-[20px] ' />
                                </button>
                                <button aria-label='slide prev'
                                    onClick={() => swiperRef2?.current?.slideNext()}
                                    className={`absolute z-[13] top-1/2 -translate-y-1/2 right-[10px] btn swiper-btn rounded-full flex items-center justify-center cursor-pointer w-[40px] h-[40px] group/button bg-[rgba(0,0,0,0.5)] ms-1`}>
                                    <FontAwesomeIcon icon={faAngleRight} className='text-white text-[20px]' />
                                </button>
                            </div>
                        </div>

                    </div>

                    {/* key information */}
                    <div className="py-4 px-3 xs:px-5 xs:py-4 bg-white rounded-xl">
                        <h4 className="font-semibold text-[22px] mb-6">Key Information</h4>
                        <div className="grid grid-cols-12 gap-3 xs:gap-6">

                            {/* col 1 */}
                            <div className="col-span-6 min-[480px]:col-span-4 sm:col-span-3 flex gap-2">
                                <MdOutlineDirectionsCar className='text-[var(--theme-color)] text-[27px] min-w-[30px]' />

                                <div className='flex flex-col'>
                                    <p className="text-[var(--body-text-color)] capitalize">Body Type</p>
                                    <h6 className="font-semibold text-[var(--dark-color)] capitalize">{listing.highlightInfo.bodyType}</h6>
                                </div>

                            </div>
                            {/* col 2 */}
                            <div className="col-span-6 min-[480px]:col-span-4 sm:col-span-3  flex gap-2">
                                <MdOutlineDirectionsCar className='text-[var(--theme-color)] text-[27px] min-w-[30px]' />
                                <div className='flex flex-col'>
                                    <p className="text-[var(--body-text-color)] capitalize">Condition</p>
                                    <h6 className="font-semibold text-[var(--dark-color)] capitalize">{listing.highlightInfo.condition}</h6>
                                </div>
                            </div>
                            {/* col 3 */}
                            <div className="col-span-6 min-[480px]:col-span-4 sm:col-span-3  flex gap-2">
                                <MdOutlineSpeed className='text-[var(--theme-color)] text-[27px] min-w-[30px]' />
                                <div className='flex flex-col'>
                                    <p className="text-[var(--body-text-color)] capitalize">Mileage</p>
                                    <h6 className="font-semibold text-[var(--dark-color)] capitalize">{listing.highlightInfo.mileage} (Mi)</h6>
                                </div>
                            </div>
                            {/* col 4 */}
                            <div className="col-span-6 min-[480px]:col-span-4 sm:col-span-3  flex gap-2">
                                <TfiSettings className='text-[var(--theme-color)] text-[27px] min-w-[30px]' />
                                <div className='flex flex-col'>
                                    <p className="text-[var(--body-text-color)] capitalize">Transmission</p>
                                    <h6 className="font-semibold text-[var(--dark-color)] capitalize">{listing.highlightInfo.transmission}</h6>
                                </div>
                            </div>
                            {/* col 5 */}
                            <div className="col-span-6 min-[480px]:col-span-4 sm:col-span-3  flex gap-2">
                                <MdOutlineDirectionsCar className='text-[var(--theme-color)] text-[27px] min-w-[30px]' />
                                <div className='flex flex-col'>
                                    <p className="text-[var(--body-text-color)] capitalize">Year</p>
                                    <h6 className="font-semibold text-[var(--dark-color)] capitalize">{listing.highlightInfo.model}</h6>
                                </div>
                            </div>
                            {/* col 6 */}
                            <div className="col-span-6 min-[480px]:col-span-4 sm:col-span-3  flex gap-2">
                                <LuFuel className='text-[var(--theme-color)] text-[27px] min-w-[30px]' />
                                <div className='flex flex-col'>
                                    <p className="text-[var(--body-text-color)] capitalize">Fuel Type</p>
                                    <h6 className="font-semibold text-[var(--dark-color)] capitalize">{listing.highlightInfo.fuelType}</h6>
                                </div>
                            </div>
                            {/* col 7 */}
                            <div className="col-span-6 min-[480px]:col-span-4 sm:col-span-3  flex gap-2">
                                <MdOutlineDirectionsCar className='text-[var(--theme-color)] text-[27px] min-w-[30px]' />
                                <div className='flex flex-col'>
                                    <p className="text-[var(--body-text-color)] capitalize">Color</p>
                                    <h6 className="font-semibold text-[var(--dark-color)] capitalize">{listing.highlightInfo.color}</h6>
                                </div>
                            </div>
                            {/* col 8 */}
                            <div className="col-span-6 min-[480px]:col-span-4 sm:col-span-3  flex gap-2">
                                <MdOutlineDirectionsCar className='text-[var(--theme-color)] text-[27px] min-w-[30px]' />
                                <div className='flex flex-col'>
                                    <p className="text-[var(--body-text-color)] capitalize">Doors</p>
                                    <h6 className="font-semibold text-[var(--dark-color)] capitalize">{listing.highlightInfo.doors} Doors</h6>
                                </div>
                            </div>
                            {/* col 9 */}
                            <div className="col-span-6 min-[480px]:col-span-4 sm:col-span-3  flex gap-2">
                                <MdOutlineDirectionsCar className='text-[var(--theme-color)] text-[27px] min-w-[30px]' />
                                <div className='flex flex-col'>
                                    <p className="text-[var(--body-text-color)] capitalize">Cylinders</p>
                                    <h6 className="font-semibold text-[var(--dark-color)] capitalize">{listing.highlightInfo.cylinders}</h6>
                                </div>
                            </div>
                            {/* col 10 */}
                            <div className="col-span-6 min-[480px]:col-span-4 sm:col-span-3 flex gap-2">
                                <MdOutlineDirectionsCar className='text-[var(--theme-color)] text-[27px] min-w-[30px]' />
                                <div className='flex flex-col'>
                                    <p className="text-[var(--body-text-color)] capitalize">Engine Size</p>
                                    <h6 className="font-semibold text-[var(--dark-color)] capitalize">{listing.highlightInfo.engineSize} (cc)</h6>
                                </div>
                            </div>
                            {/* col 11 */}
                            <div className="col-span-6 min-[480px]:col-span-4 sm:col-span-3 flex gap-2">
                                <MdOutlineDirectionsCar className='text-[var(--theme-color)] text-[27px] min-w-[30px]' />
                                <div className='flex flex-col'>
                                    <p className="text-[var(--body-text-color)] capitalize">Vin</p>
                                    <h6 className="font-semibold text-[var(--dark-color)] capitalize">{listing.highlightInfo.VIN}</h6>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* description / features / history / location */}
                    <div className="py-4 px-3 xs:px-5 xs:py-4 bg-white rounded-xl">
                        {/* description */}
                        <h4 className="font-semibold text-[22px] mb-6">Description</h4>
                        <p className="text-[var(--body-text-color)] mb-4 leading-[27px]">
                            {listing.description}
                        </p>


                        {/* features */}
                        <h4 className="font-semibold text-[22px] mb-6 mt-8">Car Features</h4>
                        <div className="grid gap-y-4 sm:gap-x-4 grid-cols-1 sm:grid-cols-2 md-lg:!grid-cols-3">
                            {/* feature col */}
                            {listing.carFeatures.map((feature, index) => (

                                <div key={index} className="flex items-center gap-x-3">
                                    <MdOutlineCheckCircle className='text-[var(--theme-color)] text-[18px]' />
                                    <p className="text-[var(--body-text-color)] capitalize">{feature}</p>
                                </div>
                            ))}

                        </div>

                        {/* Vehicle History */}
                        <h4 className="font-semibold text-[22px] mb-6 mt-8">Vehicle History</h4>
                        {/* history */}
                        <div className="flex flex-col gap-y-3">
                            {listing.carHistory.map((history, index) => (

                                <div key={index} className="flex items-center gap-x-3">
                                    <MdOutlineCheckCircle className='text-[var(--theme-color)] text-[18px]' />
                                    <p className="text-[var(--body-text-color)] capitalize">{history}</p>
                                </div>
                            ))}
                        </div>


                        {/* location */}
                        <h4 className="font-semibold text-[22px] mt-10 mb-5">Location</h4>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3319.344445580665!2d-118.25247948480373!3d33.77196028068779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2cf5b8d26c59b%3A0xa5e2c3c9b7e74c0b!2sSpace%20Needle!5e0!3m2!1sen!2sus!4v1628169904260!5m2!1sen!2sus" width={"100%"} height={"300px"} allowFullScreen="" loading="lazy" className='rounded-xl' frameBorder="0"></iframe>

                    </div>


                    {/* reviews section */}
                    <div className="py-4 px-3 xs:px-5 xs:py-4 bg-white rounded-xl">

                        <h4 className="font-semibold text-[22px] mb-10">Reviews ({String(listing.reviews.length).padStart(2, "0")})</h4>
                        {/* reviews */}
                        <div className="flex flex-col gap-y-13">
                            {/* reviews */}
                            {(listing.reviews || []).map((review, index) => (

                                <div key={index} className="flex items-start gap-x-4">
                                    {/* profile photo */}
                                    <div className="flex items-center justify-center w-[80px] h-[80px] min-w-[100px] rounded-full overflow-clip">
                                        <img src={review.authorAvatar} alt="" className='w-[80px] h-[80px] rounded-full' />
                                    </div>
                                    <div>
                                        {/* author name */}
                                        <h5 className="text-[var(--dark-color)] text-[18px] font-semibold">{review.authorName}</h5>
                                        {/* date posted */}
                                        <div className="mt-1 text-sm text-[var(--theme-color)] flex items-center gap-x-1">
                                            <FaRegClock />
                                            <p className='font-medium'>{review.datePosted}</p>
                                        </div>

                                        <p className="text-[var(--body-text-color)] mt-2.5 leading-[27px] line-clamp-3">{review.comment}</p>

                                        <button className="flex items-center gap-x-1.5 text-[var(--theme-color)] hover:text-black transition-colors duration-300 cursor-pointer mt-4">
                                            <BsReply className='mb-1 text-[22px]' />
                                            <span className="font-medium">Reply</span>
                                        </button>

                                    </div>
                                </div>
                            ))}

                        </div>

                        {/* post a review */}
                        <form
                            onSubmit={(e) => e.preventDefault()}
                            className="px-7 py-5 rounded-xl mt-8 bg-[var(--theme-bg-light)]">
                            <h4 className="font-semibold text-[22px] capitalize">Leave a Review</h4>
                            <p className="text-[var(--body-text-color)] text-sm">Your Rating</p>
                            <div className="flex mt-3 items-center gap-x-1">
                                <Rating
                                    className=''
                                    start={0}
                                    stop={5}
                                    initialRating={reviewData.rating}
                                    emptySymbol={<FaRegStar className='text-neutral-700' />}
                                    fullSymbol={<FaStar className='text-[var(--theme-color)]' />}
                                    onChange={(rating) => setReviewData(p => ({ ...p, rating: rating }))}

                                />
                            </div>

                            <div className="mt-7">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <InputBox name={"name"} required={true} placeholder={"Your Name*"} value={reviewData.name} onChange={handleInputChange} className={"bg-white"} />
                                    <InputBox name={"email"} required={true} placeholder={"Your Email*"} value={reviewData.email} onChange={handleInputChange} className={"bg-white"} />
                                </div>
                                <textarea name="comment" id="comment" value={reviewData.comment} onChange={handleInputChange} rows={5} className='mt-5 text-sm sm:text-[16px] py-3.5 px-4 w-full focus:outline-1 outline-[var(--theme-color)] border rounded-xl bg-white border-neutral-200 resize-none mb-5' placeholder='Your Comment*' required={true}></textarea>
                                <Button text={"Submit Review"} icon={faPaperPlane} className='!py-2.5 xs:!py-3.5' />
                            </div>
                        </form>
                    </div>


                </div>

                {/* col 2 */}
                <div className="col-span-12 md-lg:col-span-4 flex flex-col gap-y-5">
                    {/* price and mileage */}
                    <div className="py-4 px-3 xs:p-4 bg-white rounded-xl">
                        {/* price */}
                        <h5 className="font-bold text-[18px] sm:text-[22px] text-[var(--theme-color)]">$50,560</h5>
                        <div className="flex items-center flex-wrap gap-3 mt-4">
                            {/* mileage */}
                            <div className="flex items-center gap-x-1">
                                <FontAwesomeIcon icon={faGaugeHigh} className='text-sm sm:text-[16px] text-[var(--theme-color)]' />
                                <p className="text-sm sm:text-[16px] text-[var(--body-text-color)]">50k Miles</p>
                            </div>
                            {/* location */}
                            <div className="flex items-center gap-x-1">
                                <FontAwesomeIcon icon={faLocationDot} className='text-sm sm:text-[16px] text-[var(--theme-color)]' />
                                <p className="text-sm sm:text-[16px] text-[var(--body-text-color)]">25/B Milford, New York</p>
                            </div>
                        </div>
                    </div>
                    {/* author */}
                    <div className="py-4 px-3 xs:p-4 bg-white rounded-xl flex">
                        {/* ad owner image */}
                        <div className="w-[80px] h-[80px] sm:w-[100px] sm:min-w-[100px] sm:h-[100px] rounded-full overflow-clip">
                            <img src={IMAGES.Car_Author} alt="" className='w-[80px] h-[80px] sm:w-[100px] sm:min-w-[100px] sm:h-[100px] rounded-full ' />
                        </div>
                        <div className='px-4'>
                            <h4 className="font-semibold text-[16px] xs:text-[18px]">Marid Anderson</h4>
                            <p className="text-[var(--theme-color)] text-sm xs:text-[16px] font-semibold">Customer Advisor</p>

                            <hr className="border-b- border-neutral-200 my-3" />
                            {/* social */}
                            <div className="flex items-center gap-2">
                                <FontAwesomeIcon icon={faFacebook} className='hover:text-[var(--theme-color)] transition-colors duration-500 cursor-pointer text-[17px]' />
                                <FontAwesomeIcon icon={faInstagram} className='hover:text-[var(--theme-color)] transition-colors duration-500 cursor-pointer text-[17px]' />
                                <FontAwesomeIcon icon={faTwitter} className='hover:text-[var(--theme-color)] transition-colors duration-500 cursor-pointer text-[17px]' />
                                <FontAwesomeIcon icon={faLinkedin} className='hover:text-[var(--theme-color)] transition-colors duration-500 cursor-pointer text-[17px]' />
                            </div>
                        </div>


                    </div>

                    {/* buyer contact details form */}
                    <div className="py-4 px-3 xs:p-4 bg-white rounded-xl">
                        <h4 className="font-semibold text-[18px] mb-4">Contact Details</h4>

                        <form onSubmit={(e) => e.preventDefault()}>
                            <InputBox type='text' name={"name"} placeholder={"Enter Name"} className={"mb-5"} />
                            <InputBox type='email' name={"email"} placeholder={"Enter Email"} className={"mb-5"} />
                            <textarea name="message" id="message" className='text-sm sm:text-[16px] py-3.5 px-4 w-full focus:outline-1 outline-[var(--theme-color)] border rounded-xl border-neutral-200 resize-none mb-5' placeholder='Enter Message'></textarea>

                            <Button text={"Send Now"} icon={faArrowRight} className='!py-2.5 xs:!py-3.5 flex-row-reverse text-sm' />
                        </form>
                    </div>
                </div>
            </div>

            {/* related listings */}
            <div className="pb-30">
                <div className="custom-container px-5">
                    <h3 className="text-[23px] sm:text-[28px] font-semibold mb-3">Related Listing</h3>

                    <div className="grid grid-cols-12 mt-7 gap-5">
                        {carListings?.slice(0, 4).map((car) => (
                            <div key={car._id} className="col-span-12 mx-auto sm:col-span-6 min-[900px]:!col-span-4 xl:!col-span-3">
                                <ListingCard data={car} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
