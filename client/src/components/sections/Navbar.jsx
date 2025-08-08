import { useEffect, useState, useRef } from 'react'
import { ICONS, IMAGES } from '../../files'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGauge, faLayerGroup, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FaRegHeart, FaRegUser, FaSignOutAlt } from 'react-icons/fa'
import { MdSettings } from 'react-icons/md'

import { Button, NavItem } from '../universalComponents/index'
import AboutSidebar from './AboutSidebar.jsx'
import { Link, useNavigate } from 'react-router'

// redux
import { useSelector, useDispatch } from 'react-redux'
import { logoutUser } from '../../redux/userSlice.js'


export default function Navbar() {
    const user = useSelector(data => data.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [isNavbarOpen, setIsNavbarOpen] = useState(false)
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const [topOffset, setTopOffset] = useState(0)
    const sidebarOpenerRef = useRef()

    const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false)
    const profileDropdownRef = useRef()
    const profileBtnRef = useRef()


    // open and close navbar
    useEffect(() => {
        if (isNavbarOpen) {
            document.body.style.overflow = "hidden"
        }
        else {
            document.body.style.overflow = ""
        }
    }, [isNavbarOpen])


    useEffect(() => {
        function handleScroll() {
            setTopOffset(window.scrollY)
        }

        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    // profile dropdown
    useEffect(() => {
        const el = profileDropdownRef.current
        if (!el) return
        function clickOutside(e) {
            if (!el.contains(e.target) && profileBtnRef.current && !profileBtnRef.current.contains(e.target)) {
                setIsProfileDropdownOpen(false)
            }
        }
        window.addEventListener("click", clickOutside)

        return () => window.removeEventListener("click", clickOutside)
    }, [isProfileDropdownOpen])

    return (
        <>
            <header className={`bg-white shadow-md shadow-[rgba(0,0,0,0.08)] z-[200] ${topOffset > 100 ? "fixed left-0 right-0 top-0" : "relative"}`}>
                {/* nav over md-lg */}
                <nav className="custom-container hidden md-lg:flex items-center gap-x-4 justify-between py-0 px-3 xs:px-4 sm:px-6">
                    {/* logo */}
                    <div className="logo">
                        <img src={ICONS.Logo} alt="motex" className='max-w-[140px] xs:max-w-[160px] md-lg:max-w-[200px] py-6 ' />
                    </div>


                    <ul className="hidden md-lg:flex items-center gap-x-5 p-0 h-full">
                        {navitemsData.map((item, index) => (
                            <NavItem key={index}
                                item={item} />
                        ))}
                    </ul>

                    <div className="flex items-center gap-x-5">
                        <FontAwesomeIcon icon={faSearch} className='text-[var(--dark-color)] hover:text-[var(--theme-color)] transition-colors duration-300 cursor-pointer text-[17px]' />

                        {/* profile icon */}
                        {user.user && <div className="relative">
                            <button
                                ref={profileBtnRef}
                                onClick={() => setIsProfileDropdownOpen(p => !p)}
                                className="cursor-pointer flex items-center justify-center w-[47px] p-[2.5px] min-w-[47px] h-[47px] border-[3px] border-[var(--theme-color)] rounded-full overflow-clip">
                                <img src={IMAGES.Car_Author} alt="user" className='rounded-full' />
                            </button>
                            {/* dropdown */}
                            <div ref={profileDropdownRef} className={`${isProfileDropdownOpen ? "" : "hidden"} absolute py-2 -right-1/3 top-[calc(100%+10px)] shadow-[1px_1px_30px_5px_rgba(0,0,0,0.05)] min-w-[200px] rounded-lg bg-white flex flex-col overflow-clip`}>
                                <Link to={"/dashboard"} onClick={() => setIsProfileDropdownOpen(false)} className="py-3 px-4 flex items-center gap-x-1 text-[#212529] hover:text-[var(--theme-color)] hover:translate-x-[10px] transition-all duration-500 cursor-pointer outline-none">
                                    <FontAwesomeIcon icon={faGauge} className='w-[20px]' />
                                    <span className="font-semibold capitalize">Dashoard</span>
                                </Link>
                                <Link to={"/dashboard/profile"} onClick={() => setIsProfileDropdownOpen(false)} className="py-3 px-4 flex items-center gap-x-1 text-[#212529] hover:text-[var(--theme-color)] hover:translate-x-[10px] transition-all duration-500 cursor-pointer outline-none">
                                    <FaRegUser className='w-[20px]' />
                                    <span className="font-semibold capitalize">My Profile</span>
                                </Link>
                                <Link to={"/dashboard/my-listings"} onClick={() => setIsProfileDropdownOpen(false)} className="py-3 px-4 flex items-center gap-x-1 text-[#212529] hover:text-[var(--theme-color)] hover:translate-x-[10px] transition-all duration-500 cursor-pointer outline-none">
                                    <FontAwesomeIcon icon={faLayerGroup} className='w-[20px]' />
                                    <span className="font-semibold capitalize">My Listing</span>
                                </Link>
                                <Link to={"/dashboard/favorites"} onClick={() => setIsProfileDropdownOpen(false)} className="py-3 px-4 flex items-center gap-x-1 text-[#212529] hover:text-[var(--theme-color)] hover:translate-x-[10px] transition-all duration-500 cursor-pointer outline-none">
                                    <FaRegHeart className='w-[20px]' />
                                    <span className="font-semibold capitalize">My Farorites</span>
                                </Link>
                                <Link to={"/dashboard/settings"} onClick={() => setIsProfileDropdownOpen(false)} className="py-3 px-4 flex items-center gap-x-1 text-[#212529] hover:text-[var(--theme-color)] hover:translate-x-[10px] transition-all duration-500 cursor-pointer outline-none">
                                    <MdSettings className='w-[20px]' />
                                    <span className="font-semibold capitalize">Settings</span>
                                </Link>
                                <button onClick={() => {
                                    setIsProfileDropdownOpen(false)
                                    dispatch(logoutUser())
                                    navigate("/auth/login")
                                }} className="py-3 px-4 flex items-center gap-x-1 text-[#212529] hover:text-[var(--theme-color)] hover:translate-x-[10px] transition-all duration-500 cursor-pointer outline-none">
                                    <FaSignOutAlt className='w-[20px]' />
                                    <span className="font-semibold capitalize">Logout</span>
                                </button>
                            </div>
                        </div>}


                        {/* hamburger for sidebar */}
                        <div
                            ref={sidebarOpenerRef}
                            onClick={() => setIsSidebarOpen(p => !p)}
                            className="space-y-1.5 flex flex-col group cursor-pointer">
                            <span className="w-6 h-[3px] rounded-full bg-[var(--dark-color)] group-hover:bg-[var(--theme-color)] transition-all duration-300"></span>
                            <span className="w-5 h-[2px] rounded-full bg-[var(--dark-color)] group-hover:bg-[var(--theme-color)] transition-all duration-300"></span>
                            <span className="w-3.5 h-[3px] rounded-full bg-[var(--dark-color)] group-hover:bg-[var(--theme-color)] transition-all duration-300"></span>
                        </div>

                    </div>

                </nav>
                {/* nav under md-lg */}
                <nav className="custom-container absolute top-0 left-0 right-0 bg-white  flex md-lg:hidden flex-col items-center justify-between px-3 xs:px-4 sm:px-6">
                    {/* logo */}
                    <div className="flex items-center gap-x-4 justify-between w-full">
                        <div className="logo">
                            <img src={ICONS.Logo} alt="motex" className='max-w-[140px] xs:max-w-[160px] md-lg:max-w-[200px] py-6 ' />
                        </div>

                        <div className="flex items-center gap-x-5">
                            <FontAwesomeIcon icon={faSearch} className='text-[var(--dark-color)] hover:text-[var(--theme-color)] transition-colors duration-300 cursor-pointer text-[17px]' />

                            {/* hamburger */}
                            <div
                                onClick={() => setIsNavbarOpen(p => !p)}
                                className="space-y-1.5 flex flex-col group cursor-pointer">
                                <span className="w-6 h-[3px] rounded-full bg-[var(--dark-color)] group-hover:bg-[var(--theme-color)] transition-all duration-300"></span>
                                <span className="w-6 h-[3px] rounded-full bg-[var(--dark-color)] group-hover:bg-[var(--theme-color)] transition-all duration-300"></span>
                                <span className="w-6 h-[3px] rounded-full bg-[var(--dark-color)] group-hover:bg-[var(--theme-color)] transition-all duration-300"></span>
                            </div>

                        </div>
                    </div>

                    <div className={`overflow-y-auto w-full transition-all duration-500 ease ${isNavbarOpen ? "max-h-[360px] pt-3" : "max-h-0 pt-0"}`}>
                        <ul className={`bg-white px-6 flex w-full md-lg:hidden flex-col justify-center p-0 `}>
                            {navitemsData.map((item, index) => (
                                <NavItem key={index}
                                    item={item} />
                            ))}
                        </ul>
                    </div>

                </nav>



            </header>
            <AboutSidebar isSidebarOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} sidebarOpenerRef={sidebarOpenerRef} />
        </>
    )
}





// need to add more data in subnavs
const navitemsData = [
    {
        label: "Home",
        path: "/",
    },
    {
        label: "About",
        path: "/about",
    },
    {
        label: "Inventory",
        path: "/inventory",

    },
    // {
    //     label: "Pages",

    //     // subNav: [
    //     //     {
    //     //         label: "My Account",
    //     //         subNav: [
    //     //             {
    //     //                 label: "Dashboard",
    //     //                 path: "/dashboard",
    //     //             },
    //     //             {
    //     //                 label: "My Profile",
    //     //                 path: "/dashboard/profile",
    //     //             },
    //     //             {
    //     //                 label: "My Listing",
    //     //                 path: "/dashboard/my-listings",
    //     //             },
    //     //             {
    //     //                 label: "Add Listing",
    //     //                 path: "/dashboard/add-listing",
    //     //             },
    //     //             {
    //     //                 label: "My Favourites",
    //     //                 path: "/dashboard/favorites",
    //     //             },
    //     //             {
    //     //                 label: "Messages",
    //     //                 path: "/dashboard/messages",
    //     //             },
    //     //             {
    //     //                 label: "Settings",
    //     //                 path: "/dashboard/settings",
    //     //             },

    //     //         ],
    //     //     },
    //     //     {
    //     //         label: "Authentication",
    //     //         subNav: [
    //     //             {
    //     //                 label: "Login",
    //     //                 path: "/auth/login",
    //     //             },
    //     //             {
    //     //                 label: "Register",
    //     //                 path: "/auth/register",
    //     //             },
    //     //             {
    //     //                 label: "Forgot Password",
    //     //                 path: "/auth/forgot-password",
    //     //             },
    //     //         ],
    //     //     },

    //     // ],
    // },
    {
        label: "Contact",
        path: "/contact",
    },

];
