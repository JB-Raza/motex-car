import { useEffect, useRef, useState } from 'react';
import { IMAGES } from '../../../files'

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'

import { FaRegUser, FaRegHeart } from "react-icons/fa";
import { FaArrowRightFromBracket } from "react-icons/fa6";


import { MdOutlineCameraAlt, MdOutlineSettings } from 'react-icons/md'
import { IoMdSpeedometer } from "react-icons/io";
import { FiLayers, FiPlusCircle } from "react-icons/fi";
import { Link, Outlet, useLocation, useNavigate } from 'react-router';



export default function Dashboard() {

    const location = useLocation()
    const navigate = useNavigate()
    const path = location.pathname.split("/")
    const currPath = path[path.length - 1]
    const [activePage, setActivePage] = useState(currPath)
    const [breadCrumb, setBreadCrumb] = useState("Dashboard")


    const dataSectionRef = useRef()

    useEffect(() => setBreadCrumb(activePage.split("-").join(" ")), [activePage])

    // scrolling to the position of dashboard content area
    useEffect(() => {
        const el = dataSectionRef.current
        if (!el) return
        const distFromTop = el.getBoundingClientRect().x
        window.scrollTo({ top: distFromTop, behavior: "instant" })
    }, [location.pathname])

    return (
        <div>
            {/* hero */}
            <div className="py-40 relative before:absolute before:inset-0 before:bg-[#01060F] before:opacity-80" style={{ backgroundImage: `url(${IMAGES.Inventory_Hero_Bg})`, backgroundPosition: "center", backgroundSize: "cover" }}>
                {/* content */}
                <div className="relative z-10">
                    <h1 className="text-center text-white font-bold text-[40px] capitalize">{breadCrumb}</h1>
                    <p className="text-white font-medium mt-2 flex items-center justify-center">
                        Home
                        <FontAwesomeIcon icon={faAngleDoubleRight} className='mx-1' />
                        <span className='text-[var(--theme-color)] capitalize'>{breadCrumb}</span></p>
                </div>
            </div>

            <div className="py-30">
                <div className="custom-container">
                    <div className="grid grid-cols-12 gap-y-7 md-lg:gap-x-6 px-5">
                        {/* col 1 */}
                        <div className="col-span-12 md-lg:col-span-3 max-w-[700px] w-full mx-auto">
                            {/* profile */}
                            <div className="px-5 py-4 bg-white rounded-lg shadow-[1px_1px_30px_5px_rgba(0,0,0,0.05)]">
                                {/* profile image */}
                                <div className="relative flex items-center justify-center h-[100px] min-w-[100px] w-[100px] mx-auto rounded-full">
                                    <img src={IMAGES.Review_1} alt="" className='w-[100px] h-[100px] rounded-full' />
                                    <div className="absolute bg-[var(--theme-color)] cursor-pointer w-[30px] h-[30px] text-white right-0 bottom-0 rounded-full flex items-center justify-center">
                                        <MdOutlineCameraAlt className='text-[20px]' />
                                    </div>
                                </div>

                                {/* name */}
                                <h5 className="text-[var(--dark-color)] text-[18px] text-center font-semibold mt-3">Antoni Jonson</h5>
                                <p className="text-[var(--body-text-color)] text-center">antoni@example.com</p>

                                <hr className="border-b- border-neutral-200 my-4" />

                                {/* links */}
                                <div className="flex flex-col gap-y-1">
                                    {/* dashboard */}
                                    <Link to={"/dashboard"}
                                        onClick={() => setActivePage("dashboard")}
                                        className={`font-medium cursor-pointer transition-[padding] duration-300 hover:ps-4 px-3 py-2 rounded-md flex items-center gap-x-2 ${activePage == "dashboard" ? " bg-[var(--theme-color)] text-white" : "text-[var(--dark-color)]"}`}>
                                        <IoMdSpeedometer className={`${activePage == "dashboard" ? "text-white" : "text-[var(--theme-color)] "}`} />
                                        <span className='capitalize'>Dashboard</span>
                                    </Link>

                                    {/* profile */}
                                    <Link to={"/dashboard/profile"}
                                        onClick={() => setActivePage("profile")}
                                        className={`font-medium cursor-pointer transition-[padding] duration-500 hover:ps-4 px-3 py-2 rounded-md flex items-center gap-x-2 ${activePage == "profile" ? " bg-[var(--theme-color)] text-white" : "text-[var(--dark-color)]"}`}>
                                        <FaRegUser className={`${activePage == "profile" ? "text-white" : "text-[var(--theme-color)] "}`} />
                                        <span className='capitalize'>Profile</span>
                                    </Link>

                                    {/* my listing */}
                                    <Link to={"/dashboard/my-listings"}
                                        onClick={() => setActivePage("my-listings")}
                                        className={`font-medium cursor-pointer transition-[padding] duration-500 hover:ps-4 px-3 py-2 rounded-md flex items-center gap-x-2 ${activePage == "my-listings" ? " bg-[var(--theme-color)] text-white" : "text-[var(--dark-color)]"}`}>
                                        <FiLayers className={`${activePage == "my-listings" ? "text-white" : "text-[var(--theme-color)] "}`} />
                                        <span className='capitalize'>My Listing</span>
                                    </Link>

                                    {/* add listing */}
                                    <Link to={"/dashboard/add-listing"}
                                        onClick={() => setActivePage("add-listing")}
                                        className={`font-medium cursor-pointer transition-[padding] duration-500 hover:ps-4 px-3 py-2 rounded-md flex items-center gap-x-2 ${activePage == "add-listing" ? " bg-[var(--theme-color)] text-white" : "text-[var(--dark-color)]"}`}>
                                        <FiPlusCircle className={`${activePage == "add-listing" ? "text-white" : "text-[var(--theme-color)] "}`} />
                                        <span className='capitalize'>Add Listing</span>
                                    </Link>

                                    {/* favourites */}
                                    <Link to={"/dashboard/favorites"}
                                        onClick={() => setActivePage("favorites")}
                                        className={`font-medium cursor-pointer transition-[padding] duration-500 hover:ps-4 px-3 py-2 rounded-md flex items-center gap-x-2 ${activePage == "favorites" ? " bg-[var(--theme-color)] text-white" : "text-[var(--dark-color)]"}`}>
                                        <FaRegHeart className={`${activePage == "favorites" ? "text-white" : "text-[var(--theme-color)] "}`} />
                                        <span className='capitalize'>favorites</span>
                                    </Link>

                                    {/* messages */}
                                    {/* <Link to={"/dashboard/messages"}
                                        onClick={() => setActivePage("messages")}
                                        className={`font-medium cursor-pointer transition-[padding] duration-500 hover:ps-4 px-3 py-2 rounded-md flex items-center gap-x-2 ${activePage == "messages" ? " bg-[var(--theme-color)] text-white" : "text-[var(--dark-color)]"}`}>
                                        <MdOutlineEmail className={`${activePage == "messages" ? "text-white" : "text-[var(--theme-color)] "}`} />
                                        <span className='capitalize'>messages</span>
                                    </Link> */}

                                    {/* settings */}
                                    <Link to={"/dashboard/settings"}
                                        onClick={() => setActivePage("settings")}
                                        className={`font-medium cursor-pointer transition-[padding] duration-500 hover:ps-4 px-3 py-2 rounded-md flex items-center gap-x-2 ${activePage == "settings" ? " bg-[var(--theme-color)] text-white" : "text-[var(--dark-color)]"}`}>
                                        <MdOutlineSettings className={`${activePage == "settings" ? "text-white" : "text-[var(--theme-color)] "}`} />
                                        <span className='capitalize'>settings</span>
                                    </Link>

                                    {/* logout */}
                                    <button
                                        onClick={() => {
                                            localStorage.removeItem("accessToken")
                                            navigate("/auth/login")
                                        }}
                                        className={`font-medium cursor-pointer transition-[padding] duration-500 hover:ps-4 px-3 py-2 rounded-md flex items-center gap-x-2 ${activePage == "logout" ? " bg-[var(--theme-color)] text-white" : "text-[var(--dark-color)]"}`}>
                                        <FaArrowRightFromBracket className={`${activePage == "logout" ? "text-white" : "text-[var(--theme-color)] "}`} />
                                        <span className='capitalize'>logout</span>
                                    </button>


                                </div>
                            </div>

                        </div>

                        {/* col 2 */}
                        <div ref={dataSectionRef} className="col-span-12 md-lg:col-span-9 flex flex-col gap-y-5 max-w-[700px] md-lg:max-w-full w-full mx-auto">
                            <Outlet />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
