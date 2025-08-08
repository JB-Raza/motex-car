import { FaHeart, FaRegCalendarAlt, FaRegHeart, FaRegUserCircle, FaStar } from "react-icons/fa";

import { GiSteeringWheel } from 'react-icons/gi'
import { FaRoad, FaCar, FaGasPump } from 'react-icons/fa'
import Button from './Button';
import { faArrowRight, faEye, faQuoteRightAlt, faStar } from '@fortawesome/free-solid-svg-icons';
import { FiRepeat } from 'react-icons/fi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router";
import { useState } from "react";



export const ListingCard = ({ data, listStyle = "grid" }) => {
    const [isFavorite, setIsFavorite] = useState(false)

    return (
        <div className={`${listStyle == "grid" ? "h-full max-w-[300px]" : "flex gap-x-3 flex-col max-w-[280px] sm:max-w-[300px] md:max-w-full md:flex-row"} bg-white rounded-lg p-3 shadow-sm shadow-[rgba(0,0,0,0.05)] group/card`}>
            {/* image */}
            <div className="relative overflow-clip rounded-lg">
                <img src={data.images[0]} alt="car 1" className={`${listStyle == "grid" ? "w-full" : "max-w-[280px] sm:max-w-[310] md:max-w-[350px]"} rounded-lg group-hover/card:scale-115 transition-all duration-400`} />

                {/* car condition */}
                <div className={`absolute top-3 left-3 ${data.highlightInfo.condition == "used" ? "bg-[var(--theme-color)]" : "bg-green-600"} rounded-md text-white px-2 py-1 uppercase font-medium text-[13px]`}>{data.highlightInfo.condition}</div>

                {/* wishlist and swap icon */}
                <div className="absolute top-3 right-3 translate-x-[100%] group-hover/card:translate-x-0 opacity-0 group-hover/card:opacity-100 transition-all ease-out duration-600">
                    <button onClick={() => setIsFavorite(p => !p)} className="flex items-center justify-center h-[35px] w-[35px] rounded-full bg-[var(--theme-color)] hover:bg-[var(--dark-color)] transition-colors duration-400 cursor-pointer mb-2">
                        {isFavorite ? <FaHeart className='text-white' /> : <FaRegHeart className='text-white' />}
                    </button>
                    <button className="flex items-center justify-center h-[35px] w-[35px] rounded-full bg-[var(--theme-color)] hover:bg-[var(--dark-color)] transition-colors duration-400 cursor-pointer">
                        <FiRepeat className='text-white' />
                    </button>
                </div>
            </div>
            <div className="flex flex-col justify-between min-h-[250px] w-full">
                {/* card body */}
                <div className='px-2 pt-2'>
                    {/* title */}
                    <Link to={`/inventory/${data._id}`}>
                        <h5 className="font-bold text-[18px] text-[var(--dark-color)] hover:text-[var(--theme-color)] cursor-pointer transition-colors duration-300 w-max">{data.title}</h5>
                    </Link>

                    {/* rating */}
                    <div className="flex flex-wrap gap-y-2 gap-x-3 mt-2">
                        {/* rating */}
                        <div className="flex gap-x-1">
                            {[1, 2, 3, 4, 5].map((rate) => (
                                <FaStar key={rate} className='text-yellow-500' />
                            ))}
                        </div>

                        {/* total reviews and rating */}

                        <p className='text-sm text-[var(--body-text-color)]'> <span>{data.rating}</span> ({data.totalReviews} Reveiews) </p>

                    </div>

                    {/* features */}
                    <div className={`flex flex-wrap gap-x-5 gap-y-3 mt-4`}>
                        {/* transmission */}
                        <div className="flex items-center gap-x-1">
                            <GiSteeringWheel className='text-[var(--theme-color)]' />
                            <span className='text-sm text-[var(--body-text-color)] capitalize'>{data.highlightInfo.transmission}</span>
                        </div>
                        {/* mileage */}
                        <div className="flex items-center gap-x-1">
                            <FaRoad className='text-[var(--theme-color)]' />
                            <span className='text-sm text-[var(--body-text-color)]'>{data.highlightInfo.mileage}km / Litre</span>
                        </div>
                        {/* model */}
                        <div className="flex items-center gap-x-1">
                            <FaCar className='text-[var(--theme-color)]' />
                            <span className='text-sm text-[var(--body-text-color)]'>Model: {data.highlightInfo.model}</span>
                        </div>
                        {/* Fuel type */}
                        <div className="flex items-center gap-x-1">
                            <FaGasPump className='text-[var(--theme-color)]' />
                            <span className='text-sm text-[var(--body-text-color)] capitalize'>{data.highlightInfo.fuelType}</span>
                        </div>
                    </div>

                    {listStyle !== "grid" && <p className="text-[var(--body-text-color)] mt-4 line-clamp-2">{data.description}</p>}
                </div>

                {/* footer */}
                <div className='px-2'>
                    <hr className="border-neutral-200 border-b- my-4" />

                    {/* price and details btn */}
                    <div className="flex items-center justify-between">
                        <p className="text-[19px] text-[var(--theme-color)] font-semibold">${data.price?.toLocaleString()}</p>
                        <Link to={`/inventory/${data._id}`}>
                            <Button text={"Details"} icon={faEye} className='!py-2 !px-4' hoverBg={"bg-[var(--dark-color)]"} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>


    )
}


export const TestimonialCard = ({ testimonial }) => {
    return (
        <div className="relative pt-[45px] h-[340px] min-h-[340px] flex flex-col justify-between">
            {/* image */}
            <div className="px-7">
                <div className="absolute z-[12] rounded-full overflow-clip w-[90px] h-[90px] top-0 border-4 border-y-transparent border-[var(--theme-color)] flex items-center justify-center">
                    <img src={testimonial.authorImage} alt={testimonial.authorName} className={"w-[92%] h-[92%] rounded-full"} />
                </div>
            </div>
            <div className="relative flex flex-col justify-between h-full bg-white rounded-2xl px-7 py-10">

                {/* data */}
                <FontAwesomeIcon icon={faQuoteRightAlt} className={"absolute text-neutral-200 text-[100px] top-4 right-4"} />

                <div className="relative z-[12]">
                    <h4 className="mt-3 text-[20px] text-[var(--dark-color)] font-semibold capitalize line-clamp-1">{testimonial.authorName}</h4>
                    <p className="font-medium text-[var(--theme-color)] capitalize">customer</p>

                    <p className="mt-4 text-gray-900 leading-[28px] line-clamp-4">{testimonial.review}</p>
                </div>

                {/* rating */}
                <div className="flex items-center gap-x-0.5 mt-5">
                    {[1, 2, 3, 4, 5].map((elem) => (
                        <FontAwesomeIcon key={elem} icon={faStar} className='text-[var(--theme-color)]' />
                    ))}
                </div>

            </div>
        </div>
    )
}


export const BlogCard = ({ data }) => {
    return (
        <div className='h-full max-w-[400px] bg-white rounded-lg p-3 shadow-[1px_1px_35px_1px_rgba(0,0,0,0.1)] group/card'>
            {/* image */}
            <div className="relative overflow-clip rounded-lg">
                <img src={data.imageUrl} alt="car 1" className='rounded-lg group-hover/card:scale-115 transition-all duration-400' />
            </div>
            <div className="flex flex-col justify-between">
                {/* card body */}
                <div className='px-2 pt-2 grow-2'>
                    <div className="flex justify-between mt-2.5 items-center flex-wrap gap-y-2 gap-x-3">
                        <div className="flex items-center gap-x-1">
                            <FaRegUserCircle className="text-[18px] text-[var(--theme-color)]" />
                            <h5 className="font-medium text-[var(--dark-color)]">By {data.authorName}</h5>
                        </div>
                        <div className="flex items-center gap-x-1">
                            <FaRegCalendarAlt className="text-[18px] text-[var(--theme-color)]" />
                            <h5 className="font-medium text-[var(--dark-color)]">{data.datePosted}</h5>
                        </div>
                    </div>
                    <hr className="border-neutral-200 border-b- my-5" />
                    {/* title */}
                    <h5 className="font-semibold capitalize text-[18px] sm:text-[22px] leading-[25px] sm:leading-[30px] text-[var(--dark-color)] hover:text-[var(--theme-color)] cursor-pointer transition-colors duration-300">{data.title}</h5>
                </div>

                {/* footer */}
                <div className='px-2 pt-8 flex items-end'>
                    {/* details btn */}
                    <Button text={"Read More"} icon={faArrowRight} className="flex-row-reverse" hoverBg={"bg-[var(--dark-color)]"} />
                </div>
            </div>
        </div>


    )
}

export const ChatCard = ({ data, onClick = null }) => {
    return (
        <div
            onClick={onClick}
            className="flex gap-3 items-center bg-white hover:bg-neutral-50 cursor-pointer py-6 px-5 border-b border-neutral-200">
            {/* profile image */}
            <div className="min-w-[50px] w-[50px] h-[50px] rounded-full flex items-center justify-center relative">
                <img src={data.profilePic} alt="chat 1" className="w-[50px] h-[50px] rounded-full" />
                <div className={`absolute right-0 bottom-0 -translate-y-1/2 border-2 border-white w-[10px] h-[10px] rounded-full ${data.activeStatus == "online" ? "bg-green-500" : "bg-gray-400"}`}></div>
            </div>
            {/* name and last message */}
            <div className="w-full">
                <div className="flex justify-between">
                    <h6 className="text-sm font-semibold line-clamp-1">{data.recepientName}</h6>
                    <span className="text-[var(--body-text-color)] text-[12px]">{data.activeStatus}</span>
                </div>
                <p className="text-sm text-[var(--body-text-color)] line-clamp-1">{data.messages[data.messages.length - 1].message || ""}</p>
            </div>
        </div>
    )
}