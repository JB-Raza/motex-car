import { faAngleDoubleRight, faArrowRight, faCar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IMAGES, TEAM_IMAGES } from '../../files'
import { HiOutlineClock, HiOutlineWrenchScrewdriver } from 'react-icons/hi2'
import { MdCheckCircleOutline, MdOutlineDirectionsCar } from 'react-icons/md'
import { PiCar, PiKey } from 'react-icons/pi'
import { Button, Counter, LineAnimation } from '../universalComponents'
import { Testimonial } from '../sections'
import { carBrands } from '../../sampleData'
import { faFacebookF, faLinkedinIn, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'

export default function About() {
    return (
        <div>
            {/* hero */}
            <div className="py-40 relative before:absolute before:inset-0 before:bg-[#01060F] before:opacity-80" style={{ backgroundImage: `url(${IMAGES.Inventory_Hero_Bg})`, backgroundPosition: "center", backgroundSize: "cover" }}>
                {/* content */}
                <div className="relative z-10">
                    <h1 className="text-center text-white font-bold text-[40px]">About Us</h1>
                    <p className="text-white font-medium mt-2 flex items-center justify-center">
                        Home
                        <FontAwesomeIcon icon={faAngleDoubleRight} className='mx-1' />
                        <span className='text-[var(--theme-color)]'>About Us</span></p>
                </div>
            </div>

            {/* worlds largest car dealer market */}
            <div className="custom-container grid grid-cols-12 py-30 gap-y-10">
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
                <div className="grid grid-cols-12 custom-container gap-y-[30px] relative z-[12]">
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

            {/* testimonial */}
            <div className="px-5 py-30 bg-[var(--theme-bg-light)]">
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

            {/* team */}
            <div className="bg-white pt-30 px-5">

                <div className="custom-container">
                    <div className="flex items-center justify-center gap-x-2 text-[var(--theme-color)] mb-1.5">
                        <FontAwesomeIcon icon={faCar} className='text-sm sm:text-[18px]' />
                        <h4 className="tracking-[3px] font-bold text-sm sm:text-[17px] uppercase">Team</h4>
                    </div>

                    <h2 className="text-center font-bold text-[var(--dark-color)] text-[25px] leading-[30px] sm:text-[35px] sm:leading-[45px] md:leading-[55px] md:text-[45px]">Meet With Our <span className='text-[var(--theme-color)]'>Team</span></h2>

                    {/* animation */}
                    <LineAnimation />

                    {/* members */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md-lg:!grid-cols-4 mt-15 gap-y-5 sm:gap-x-5">

                        {/* card */}
                        {teamData.map((person, index) => (
                            <div key={index} className={`h-full mx-auto transition-transform duration-500 hover:-translate-y-[10px] max-w-[300px] bg-white rounded-xl p-3 group/card shadow-[1px_1px_30px_5px_rgba(0,0,0,0.05)]`}>
                                {/* image */}
                                <div className="relative overflow-clip rounded-lg">
                                    <img src={person.profilePic} alt="member 1" className={`w-full rounded-xl transition-all duration-400`} />

                                    {/* socials*/}
                                    <div className="absolute top-1/2 -translate-y-1/2 right-3 translate-x-[100%] group-hover/card:translate-x-0 opacity-0 group-hover/card:opacity-100 transition-all ease-out duration-600 flex flex-col gap-y-2.5">

                                        <button className="flex items-center justify-center h-[35px] w-[35px] rounded-full bg-[var(--theme-color)] hover:bg-[var(--dark-color)] transition-colors duration-400 cursor-pointer">
                                            <FontAwesomeIcon icon={faFacebookF} className='text-white' />
                                        </button>
                                        <button className="flex items-center justify-center h-[35px] w-[35px] rounded-full bg-[var(--theme-color)] hover:bg-[var(--dark-color)] transition-colors duration-400 cursor-pointer">
                                            <FontAwesomeIcon icon={faTwitter} className='text-white' />
                                        </button>
                                        <button className="flex items-center justify-center h-[35px] w-[35px] rounded-full bg-[var(--theme-color)] hover:bg-[var(--dark-color)] transition-colors duration-400 cursor-pointer">
                                            <FontAwesomeIcon icon={faLinkedinIn} className='text-white' />
                                        </button>
                                        <button className="flex items-center justify-center h-[35px] w-[35px] rounded-full bg-[var(--theme-color)] hover:bg-[var(--dark-color)] transition-colors duration-400 cursor-pointer">
                                            <FontAwesomeIcon icon={faYoutube} className='text-white' />
                                        </button>
                                    </div>
                                </div>

                                <div className='mt-3'>
                                    <h4 className="text-[20px] text-[var(--dark-color)] font-semibold cursor-pointer hover:text-[var(--theme-color)] transition-colors duration-300 text-center">{person.name}</h4>
                                    <p className="text-[var(--theme-color)] font-semibold text-center">{person.designation}</p>

                                </div>
                            </div>
                        ))}

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



        </div >
    )
}


const teamData = [
    { profilePic: TEAM_IMAGES.Team_Member_1, name: "Melissa Fie", designation: "HR Manager" },
    { profilePic: TEAM_IMAGES.Team_Member_2, name: "Chat Smith", designation: "Technician" },
    { profilePic: TEAM_IMAGES.Team_Member_3, name: "Arron Rodri", designation: "CEO & Founder" },
    { profilePic: TEAM_IMAGES.Team_Member_4, name: "Tony Pinto", designation: "Mechanical Engineer" },
]