import { useEffect, useRef, memo } from 'react'

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot, faPhone, faX } from '@fortawesome/free-solid-svg-icons'

import { ICONS } from '../../files'
import { faFacebookF, faLinkedinIn, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

// components


const AboutSidebar = memo(({ isSidebarOpen, onClose, sidebarOpenerRef }) => {
    const sidebarRef = useRef()

    // click outside to close sidebar
    useEffect(() => {
        function hanldeClickOutside(e) {
            if (sidebarRef.current && !sidebarRef.current.contains(e.target) && sidebarOpenerRef.current && !sidebarOpenerRef.current.contains(e.target)) {
                onClose()
            }
        }
        if (isSidebarOpen) {
            window.addEventListener("click", hanldeClickOutside)
        }

        return () => {
            if (isSidebarOpen) {
                window.removeEventListener("click", hanldeClickOutside)
            }
        }
    }, [isSidebarOpen])

    // overlay on sidebar open

    useEffect(() => {
        const wrapper = document.getElementById("body-wrapper")
        if (isSidebarOpen) {
            wrapper.style.backgroundColor = "rgba(0,0,0,0.55)"
            wrapper.style.inset = "0px"
            document.body.style.overflow = "hidden"
        }


        return () => {
            wrapper.style.backgroundColor = "none"
            wrapper.style.inset = "auto"
            document.body.style.overflow = "auto"


        };
    }, [isSidebarOpen])

    return (
        <>
            <div ref={sidebarRef} className={`max-h-screen overflow-y-auto fixed right-0 top-0 z-[210] bg-white shadow-lg shadow-blue-100 min-w-[300px] max-w-[100%] sm:max-w-[500px] w-[450px] transition-all duration-500 ${isSidebarOpen ? "translate-x-0 opacity-100" : "translate-x-[150%] opacity-0"}`}>

                <div className="px-11 py-8">
                    <div>
                        {/* btn to close sidebar */}
                        <div className="flex justify-between  items-center gap-x-5">

                            <img loading="lazy" src={ICONS.Logo}
                                className='-ms-2 me-auto w-[200px]'
                                alt="logo..." />
                            <button
                                onClick={onClose}
                                className='cursor-pointer min-w-[27px] bg-[var(--dark-color)] w-[34px] h-[34px] flex items-center justify-center theme-bg hover:opacity-80 rounded-full p-1'>
                                <FontAwesomeIcon icon={faX} className='text-white text-[15px]' />
                            </button>
                        </div>

                        <div className="mt-10 flex flex-col gap-y-5">

                            <h4 className="font-semibold text-[22px]">About Us</h4>
                            <p className="text-[var(--body-text-color)]">There are many variations of passages available sure there majority have suffered alteration in some form by injected humour or randomised words which don't look even slightly believable.</p>

                            <h4 className="font-semibold text-[22px]">Contact Info</h4>

                            <div className="">
                                <h5 className="font-semibold">Email</h5>
                                <div className="flex gap-x-1 items-center">
                                    <FontAwesomeIcon icon={faEnvelope} className='text-[var(--theme-color)]' />
                                    <p>info@example.com</p>
                                </div>
                                <h5 className="mt-3 font-semibold">Phone</h5>
                                <div className="flex gap-x-1 items-center">
                                    <FontAwesomeIcon icon={faPhone} className='text-[var(--theme-color)]' />
                                    <p>+12 123 456 678</p>
                                </div>
                                <h5 className="mt-3 font-semibold">Address</h5>
                                <div className="flex gap-x-1 items-center">
                                    <FontAwesomeIcon icon={faLocationDot} className='text-[var(--theme-color)]' />
                                    <p>25/B Mailford Road, New York</p>
                                </div>
                            </div>

                            <h4 className="font-semibold text-[22px]">Follow Us</h4>

                            <div className="flex items-center gap-x-4">
                                <div className="h-[40px] w-[40px] text-white transition-colors duration-500 cursor-pointer flex items-center justify-center rounded-full bg-black hover:bg-[var(--theme-color)]">
                                    <FontAwesomeIcon icon={faFacebookF} />
                                </div>
                                <div className="h-[40px] w-[40px] text-white transition-colors duration-500 cursor-pointer flex items-center justify-center rounded-full bg-black hover:bg-[var(--theme-color)]">
                                    <FontAwesomeIcon icon={faTwitter} />
                                </div>
                                <div className="h-[40px] w-[40px] text-white transition-colors duration-500 cursor-pointer flex items-center justify-center rounded-full bg-black hover:bg-[var(--theme-color)]">
                                    <FontAwesomeIcon icon={faLinkedinIn} />
                                </div>
                                <div className="h-[40px] w-[40px] text-white transition-colors duration-500 cursor-pointer flex items-center justify-center rounded-full bg-black hover:bg-[var(--theme-color)]">
                                    <FontAwesomeIcon icon={faYoutube} />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
})


export default AboutSidebar