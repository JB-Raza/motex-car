import { faFacebookF, faLinkedinIn, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from '../universalComponents'
import { faCaretRight, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { HiEnvelope } from 'react-icons/hi2'
import { MdLocationOn, MdOutlinePhone } from 'react-icons/md'
import { ICONS } from '../../files'
import { Link } from 'react-router'

export default function Footer() {
    return (
        <footer>
            <div className="bg-[var(--dark-color)]">
                <div className="custom-container px-5">
                    <div className="py-25 grid grid-cols-12 gap-y-10 sm:gap-x-10">
                        {/* col 1 */}
                        <div className="col-span-12 sm:col-span-8 md:col-span-6 md-lg:!col-span-4">
                            <img src={ICONS.Logo_2} className='max-w-[230px]' />

                            <p className="text-white mt-8 leading-[28px]">We are many variations of passages available but the majority have suffered alteration in some form by injected humour words believable.</p>

                            {/* details */}
                            <div className="flex flex-col gap-4 mt-5">
                                {/* phone */}
                                <div className="flex items-center gap-4">
                                    {/* icon */}
                                    <div className="flex items-center justify-center w-[30px] h-[30px] rounded-lg bg-[var(--theme-color)]">
                                        <MdOutlinePhone className={'text-white text-[20px]'} />
                                    </div>
                                    <p className="text-white">+2 123 654 7898</p>
                                </div>
                                {/* location */}
                                <div className="flex items-center gap-4">
                                    {/* icon */}
                                    <div className="flex items-center justify-center w-[30px] h-[30px] rounded-lg bg-[var(--theme-color)]">
                                        <MdLocationOn className={'text-white text-[20px]'} />
                                    </div>
                                    <p className="text-white">25/B Milford Road, New York</p>
                                </div>
                                {/* email */}
                                <div className="flex items-center gap-4">
                                    {/* icon */}
                                    <div className="flex items-center justify-center w-[30px] h-[30px] rounded-lg bg-[var(--theme-color)]">
                                        <HiEnvelope className={'text-white text-[20px]'} />
                                    </div>
                                    <p className="text-white">info@example.com</p>
                                </div>
                            </div>
                        </div>
                        {/* col 2 */}
                        <div className="col-span-12 xs:col-span-6 sm:col-span-4 md:col-span-3 md-lg:!col-span-2">
                            <h5 className="text-white text-[22px] font-semibold">Quick Links</h5>
                            {/* line */}
                            <div className="w-[100px] h-[2px] bg-neutral-700 mt-3">
                                <p className="w-[35px] translate-x-2/3 h-[2px] bg-[var(--theme-color)]"></p>
                            </div>

                            {/* pages */}
                            <div className="flex flex-col gap-4 mt-8">
                                {/* about us */}
                                <Link to={"/about"} className="flex gap-x-2 items-center group hover:translate-x-[7px] transition-transform duration-500 cursor-pointer w-max">
                                    <FontAwesomeIcon icon={faCaretRight} className='text-[var(--theme-color)]' />
                                    <p className="text-white group-hover:text-[var(--theme-color)] transition-colors duration-500">About Us</p>
                                </Link>
                                {/* Update news */}
                                <div className="flex gap-x-2 items-center group hover:translate-x-[7px] transition-transform duration-500 cursor-pointer w-max">
                                    <FontAwesomeIcon icon={faCaretRight} className='text-[var(--theme-color)]' />
                                    <p className="text-white group-hover:text-[var(--theme-color)] transition-colors duration-500">Update News</p>
                                </div>
                                {/* Testimonials */}
                                <Link to={"/testimonials"} className="flex gap-x-2 items-center group hover:translate-x-[7px] transition-transform duration-500 cursor-pointer w-max">
                                    <FontAwesomeIcon icon={faCaretRight} className='text-[var(--theme-color)]' />
                                    <p className="text-white group-hover:text-[var(--theme-color)] transition-colors duration-500">Testimonials</p>
                                </Link>
                                {/* Terms of Service */}
                                <Link to={"/terms-of-service"} className="flex gap-x-2 items-center group hover:translate-x-[7px] transition-transform duration-500 cursor-pointer w-max">
                                    <FontAwesomeIcon icon={faCaretRight} className='text-[var(--theme-color)]' />
                                    <p className="text-white group-hover:text-[var(--theme-color)] transition-colors duration-500">Terms of Service</p>
                                </Link>
                                {/* Privacy Policy */}
                                <Link to={"/privacy-policy"} className="flex gap-x-2 items-center group hover:translate-x-[7px] transition-transform duration-500 cursor-pointer w-max">
                                    <FontAwesomeIcon icon={faCaretRight} className='text-[var(--theme-color)]' />
                                    <p className="text-white group-hover:text-[var(--theme-color)] transition-colors duration-500">Privacy Policy</p>
                                </Link>
                                {/* Our Dealers */}
                                <div className="flex gap-x-2 items-center group hover:translate-x-[7px] transition-transform duration-500 cursor-pointer w-max">
                                    <FontAwesomeIcon icon={faCaretRight} className='text-[var(--theme-color)]' />
                                    <p className="text-white group-hover:text-[var(--theme-color)] transition-colors duration-500">Our Dealers</p>
                                </div>
                            </div>
                        </div>
                        {/* col 3 */}
                        <div className="col-span-12 xs:col-span-6 sm:col-span-4 md:col-span-3 md-lg:!col-span-3">
                            <h5 className="text-white text-[22px] font-semibold">Support Center</h5>
                            {/* line */}
                            <div className="w-[100px] h-[2px] bg-neutral-700 mt-3">
                                <p className="w-[35px] translate-x-2/3 h-[2px] bg-[var(--theme-color)]"></p>
                            </div>

                            {/* pages */}
                            <div className="flex flex-col gap-4 mt-8">
                                {/* FAQ's */}
                                <Link to={"/faq"} className="flex gap-x-2 items-center group hover:translate-x-[7px] transition-transform duration-500 cursor-pointer w-max">
                                    <FontAwesomeIcon icon={faCaretRight} className='text-[var(--theme-color)]' />
                                    <p className="text-white group-hover:text-[var(--theme-color)] transition-colors duration-500">FAQ's</p>
                                </Link>
                                {/* Affilates */}
                                <div className="flex gap-x-2 items-center group hover:translate-x-[7px] transition-transform duration-500 cursor-pointer w-max">
                                    <FontAwesomeIcon icon={faCaretRight} className='text-[var(--theme-color)]' />
                                    <p className="text-white group-hover:text-[var(--theme-color)] transition-colors duration-500">Affilates</p>
                                </div>
                                {/* Booking Tips */}
                                <div className="flex gap-x-2 items-center group hover:translate-x-[7px] transition-transform duration-500 cursor-pointer w-max">
                                    <FontAwesomeIcon icon={faCaretRight} className='text-[var(--theme-color)]' />
                                    <p className="text-white group-hover:text-[var(--theme-color)] transition-colors duration-500">Booking Tips</p>
                                </div>
                                {/* Sell Vehicles */}
                                <div className="flex gap-x-2 items-center group hover:translate-x-[7px] transition-transform duration-500 cursor-pointer w-max">
                                    <FontAwesomeIcon icon={faCaretRight} className='text-[var(--theme-color)]' />
                                    <p className="text-white group-hover:text-[var(--theme-color)] transition-colors duration-500">Sell Vehicles</p>
                                </div>
                                {/* Contact Us */}
                                <Link to={"/contact"} className="flex gap-x-2 items-center group hover:translate-x-[7px] transition-transform duration-500 cursor-pointer w-max">
                                    <FontAwesomeIcon icon={faCaretRight} className='text-[var(--theme-color)]' />
                                    <p className="text-white group-hover:text-[var(--theme-color)] transition-colors duration-500">Contact Us</p>
                                </Link>
                                {/* Sitemap */}
                                <div className="flex gap-x-2 items-center group hover:translate-x-[7px] transition-transform duration-500 cursor-pointer w-max">
                                    <FontAwesomeIcon icon={faCaretRight} className='text-[var(--theme-color)]' />
                                    <p className="text-white group-hover:text-[var(--theme-color)] transition-colors duration-500">Sitemap</p>
                                </div>
                            </div>
                        </div>

                        {/* col 4 */}
                        <div className="col-span-12 sm:col-span-8 md:col-span-6 md-lg:!col-span-3">
                            <h5 className="text-white text-[22px] font-semibold">Newsletter</h5>
                            {/* line */}
                            <div className="w-[100px] h-[2px] bg-neutral-700 mt-3">
                                <p className="w-[35px] translate-x-2/3 h-[2px] bg-[var(--theme-color)]"></p>
                            </div>


                            <div className="flex flex-col gap-4 mt-8">
                                <p className="text-white pe-[22px] leading-[30px] mb-17px]">Subscribe Our Newsletter To Get Latest Update And News</p>

                                <form onSubmit={(e) => e.preventDefault()}>
                                    <input type="email" placeholder="You Email" className='rounded-xl bg-white outline-none py-4 px-5 w-full' />
                                    <Button text={"Subscribe Now"} icon={faPaperPlane} className='flex-row-reverse w-full mt-5 py-4 hover:text-[var(--theme-color)]' hoverBg='bg-white' />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* copywrite footer */}
            <div className="bg-[var(--footer-bg)] relative bottom-footer">
                <div className="relative z-[12] custom-container flex justify-between max-[600px]:justify-center max-[600px]:flex-wrap gap-y-3 items-center p-5">
                    <p className="text-white">© Copyright 2025 <span className="text-[var(--theme-color)] font-semibold">MOTEX</span> All Rights Reserved.</p>

                    <div className="flex items-center gap-x-4">
                        <div className="h-[38px] w-[38px] text-[var(--theme-color)] hover:text-white hover:bg-black transition-colors duration-500 cursor-pointer flex items-center justify-center rounded-xl bg-white">
                            <FontAwesomeIcon icon={faFacebookF} />
                        </div>
                        <div className="h-[38px] w-[38px] text-[var(--theme-color)] hover:text-white hover:bg-black transition-colors duration-500 cursor-pointer flex items-center justify-center rounded-xl bg-white">
                            <FontAwesomeIcon icon={faTwitter} />
                        </div>
                        <div className="h-[38px] w-[38px] text-[var(--theme-color)] hover:text-white hover:bg-black transition-colors duration-500 cursor-pointer flex items-center justify-center rounded-xl bg-white">
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </div>
                        <div className="h-[38px] w-[38px] text-[var(--theme-color)] hover:text-white hover:bg-black transition-colors duration-500 cursor-pointer flex items-center justify-center rounded-xl bg-white">
                            <FontAwesomeIcon icon={faYoutube} />
                        </div>
                    </div>
                </div>



            </div>

        </footer>
    )
}
