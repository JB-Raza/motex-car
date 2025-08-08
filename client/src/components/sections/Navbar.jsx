import { useEffect, useState, useRef } from 'react'
import { ICONS } from '../../files'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faSearch } from '@fortawesome/free-solid-svg-icons'

import { Button, NavItem } from '../universalComponents/index'
import AboutSidebar from './AboutSidebar.jsx'


export default function Navbar() {
    const [isNavbarOpen, setIsNavbarOpen] = useState(false)
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const [topOffset, setTopOffset] = useState(0)
    const sidebarOpenerRef = useRef()


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

                        <Button
                            text={"Add Listing"}
                            icon={faPlusCircle}
                            hoverBg={"bg-[var(--dark-color)]"}
                            className='hidden min-[1080px]:flex'
                        />

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
