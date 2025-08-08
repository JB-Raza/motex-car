import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopesBulk, faPhoneVolume, faAlarmClock, faRightToBracket, faUser } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { Link } from 'react-router'

export default function TopNav() {
    return (
        <div className='bg-[var(--theme-color)] '>
            <div className="max-w-[92%] min-w-[75vw] bg-[var(--dark-color)] mx-auto" style={{
                clipPath: "polygon(0 0, 100% 0, 98% 100%, 2% 100%)"

            }}>

                <div className="custom-container mx-auto flex justify-between px-5 py-3 text-white">
                    {/* left */}
                    <div className="flex items-center gap-x-3 xl:gap-x-5">
                        {/* email */}
                        <div className="hidden min-[600px]:flex gap-x-0.5 text-[16px] items-center cursor-pointer">
                            <FontAwesomeIcon icon={faEnvelopesBulk} className='text-[var(--theme-color)]' />
                            <span className=''>info@example.com</span>
                        </div>
                        {/* phone */}
                        <div className="flex gap-x-0.5 text-[16px] items-center cursor-pointer">
                            <FontAwesomeIcon icon={faPhoneVolume} className='text-[var(--theme-color)]' />
                            <span className=''>+2 123 456 7898</span>
                        </div>
                        {/* date */}
                        <div className="hidden min-[800px]:flex  gap-x-0.5 text-[16px] items-center cursor-pointer">
                            <FontAwesomeIcon icon={faAlarmClock} className='text-[var(--theme-color)]' />
                            <span className=''>Sun - Fri (08AM - 10PM)</span>
                        </div>
                    </div>

                    {/* right login/signup social links */}
                    <div className="flex items-center gap-x-5">

                        <div className="flex items-center gap-x-3">
                            <Link to={"/auth/login"} className="text-white hover:text-[var(--theme-color)] transition-colors duration-300 cursor-pointer flex items-center gap-x-0.5">
                                <FontAwesomeIcon icon={faRightToBracket} className='' />
                                <span className='font-normal'>Login</span>
                            </Link>
                            <Link to={"/auth/register"} className="text-white hover:text-[var(--theme-color)] transition-colors duration-300 cursor-pointer flex items-center gap-x-0.5">
                                <FontAwesomeIcon icon={faUser} className='' />
                                <span className='font-normal'>Signup</span>
                            </Link>
                        </div>
                        {/* social links */}
                        <div className="hidden md-lg:flex items-center gap-x-3">
                            <span className='me-3 hidden min-[1036px]:inline'>Follow Us:</span>
                            <FontAwesomeIcon icon={faFacebook} className='hover:text-[var(--theme-color)] transition-colors duration-300 cursor-pointer' />
                            <FontAwesomeIcon icon={faTwitter} className='hover:text-[var(--theme-color)] transition-colors duration-300 cursor-pointer' />
                            <FontAwesomeIcon icon={faInstagram} className='hover:text-[var(--theme-color)] transition-colors duration-300 cursor-pointer' />
                            <FontAwesomeIcon icon={faLinkedin} className='hover:text-[var(--theme-color)] transition-colors duration-300 cursor-pointer' />
                        </div>
                    </div>

                </div>
            </div>

        </div >
    )
}
