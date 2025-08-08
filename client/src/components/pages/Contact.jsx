import { faAlarmClock, faAngleDoubleRight, faEnvelopesBulk, faMapLocationDot, faPaperPlane, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IMAGES } from '../../files'
import { useState } from 'react'
import { Button, InputBox } from '../universalComponents'

export default function Contact() {

  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" })

  function handleInputChange(e) {
    const { name, value } = e.target

    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div>
      {/* hero */}
      <div className="py-40 relative before:absolute before:inset-0 before:bg-[#01060F] before:opacity-80" style={{ backgroundImage: `url(${IMAGES.Inventory_Hero_Bg})`, backgroundPosition: "center", backgroundSize: "cover" }}>
        {/* content */}
        <div className="relative z-10">
          <h1 className="text-center text-white font-bold text-[40px]">Contact Us</h1>
          <p className="text-white font-medium mt-2 flex items-center justify-center">
            Home
            <FontAwesomeIcon icon={faAngleDoubleRight} className='mx-1' />
            <span className='text-[var(--theme-color)]'>Contact Us</span></p>
        </div>
      </div>

      {/* address and location */}
      <div className="custom-container px-5 py-30">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md-lg:!grid-cols-4 gap-6">

          {/* card 1 */}
          <div className="bg-white rounded-xl transition-transform duration-500 hover:-translate-y-[10px] shadow-[1px_1px_30px_5px_rgba(0,0,0,0.05)] px-5 py-7 flex flex-col items-center gap-y-2">
            {/* icon */}
            <div className="w-[65px] h-[65px] rounded-full bg-[var(--theme-color)] flex items-center justify-center">
              <FontAwesomeIcon icon={faMapLocationDot} className='text-[30px] text-[white]' />
            </div>
            <h4 className="text-[20px] text-[var(--dark-color)] font-semibold">Office Address</h4>
            <p className="text-[var(--dark-color)] font-medium text-center leading-[1.8rem]">25/B Milford, New York, USA</p>
          </div>

          {/* card 2 */}
          <div className="bg-white rounded-xl transition-transform duration-500 hover:-translate-y-[10px] shadow-[1px_1px_30px_5px_rgba(0,0,0,0.05)] px-5 py-7 flex flex-col items-center gap-y-2">
            {/* icon */}
            <div className="w-[65px] h-[65px] rounded-full bg-[var(--theme-color)] flex items-center justify-center">
              <FontAwesomeIcon icon={faPhone} className='text-[30px] text-[white]' />
            </div>
            <h4 className="text-[20px] text-[var(--dark-color)] font-semibold">Call Us</h4>
            <p className="text-[var(--dark-color)] font-medium text-center leading-[1.8rem]">+2 123 4565 789</p>
          </div>

          {/* card 3 */}
          <div className="bg-white rounded-xl transition-transform duration-500 hover:-translate-y-[10px] shadow-[1px_1px_30px_5px_rgba(0,0,0,0.05)] px-5 py-7 flex flex-col items-center gap-y-2">
            {/* icon */}
            <div className="w-[65px] h-[65px] rounded-full bg-[var(--theme-color)] flex items-center justify-center">
              <FontAwesomeIcon icon={faEnvelopesBulk} className='text-[30px] text-[white]' />
            </div>
            <h4 className="text-[20px] text-[var(--dark-color)] font-semibold">Email Us</h4>
            <p className="text-[var(--dark-color)] font-medium text-center leading-[1.8rem]">info@example.com</p>
          </div>

          {/* card 4 */}
          <div className="bg-white rounded-xl transition-transform duration-500 hover:-translate-y-[10px] shadow-[1px_1px_30px_5px_rgba(0,0,0,0.05)] px-5 py-7 flex flex-col items-center gap-y-2">
            {/* icon */}
            <div className="w-[65px] h-[65px] rounded-full bg-[var(--theme-color)] flex items-center justify-center">
              <FontAwesomeIcon icon={faAlarmClock} className='text-[30px] text-[white]' />
            </div>
            <h4 className="text-[20px] text-[var(--dark-color)] font-semibold">Open Time</h4>
            <p className="text-[var(--dark-color)] font-medium text-center leading-[1.8rem]">Mon - Sat (10.00AM - 05.30PM)</p>
          </div>
        </div>
      </div>

      <div className="custom-container px-5 pb-30">
        <div className="grid items-center grid-cols-1 md:grid-cols-2 gap-5 shadow-[1px_1px_30px_5px_rgba(0,0,0,0.05)] bg-white rounded-2xl p-5">
          <div className='overflow-clip rounded-2xl'>
            <img src={IMAGES.ContactImage} alt="contact us" className='rounded-l-2xl rounded-r-full' />
          </div>

          {/* col 2 */}
          <div className='py-5'>
            <h3 className="text-[30px] text-[var(--dark-color)] mb-2 font-bold capitalize">Get In Touch</h3>
            <p className="text-[var(--body-text-color)] leading-[1.8rem]">It is a long established fact that a reader will be distracted by the readable content of a page randomised words which don't look even slightly when looking at its layout.</p>

            <form className='mt-10'>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 md-lg:!grid-cols-2 gap-x-5">
                {/* name */}
                <div className="mb-6">
                  <InputBox name={"name"} placeholder={"Your Name"} value={formData.name} onChange={handleInputChange} />
                </div>
                {/* email */}
                <div className="mb-6">
                  <InputBox name={"email"} type='email' placeholder={"Your Email"} value={formData.email} onChange={handleInputChange} />
                </div>
              </div>
              {/* subject */}
              <div className="mb-6">
                <InputBox name={"subject"} placeholder={"Your Subject"} value={formData.subject} onChange={handleInputChange} />
              </div>
              {/* message */}
              <div className="">
                <textarea name="message" id="message" value={formData.message} onChange={handleInputChange} rows={5} className='text-sm sm:text-[16px] py-3.5 px-4 w-full focus:outline-1 outline-[var(--theme-color)] border rounded-xl bg-white border-neutral-200 resize-none mb-5' placeholder='Write Your Message'></textarea>
              </div>

              <Button
                text={"Send Message"}
                icon={faPaperPlane}
              />
            </form>
          </div>
        </div>
      </div>

      <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3319.344445580665!2d-118.25247948480373!3d33.77196028068779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2cf5b8d26c59b%3A0xa5e2c3c9b7e74c0b!2sSpace%20Needle!5e0!3m2!1sen!2sus!4v1628169904260!5m2!1sen!2sus" 
      width={"100%"} 
      height={"400px"} 
      allowFullScreen="" 
      loading="lazy"></iframe>
    </div>
  )
}