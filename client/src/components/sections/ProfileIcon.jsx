import { useEffect, useRef, useState } from 'react'
import { IMAGES } from '../../files'
import { faGauge, faLayerGroup } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaRegHeart, FaRegUser, FaSignOutAlt } from 'react-icons/fa'
import { MdSettings } from 'react-icons/md'
import { Link, useNavigate } from 'react-router'

import { useDispatch } from 'react-redux'
import { logoutUser } from '../../redux/userSlice'

export default function ProfileIcon() {
    const profileBtnRef = useRef()
    const profileDropdownRef = useRef()

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false)


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
        <div className="relative">
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
        </div>
    )
}
