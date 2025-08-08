import { faAngleDoubleRight, faHome, faHomeAlt } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { IMAGES } from '../../files'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from '../universalComponents'
import { Link } from 'react-router'

export default function Page404() {
  return (
    <div>
      {/* hero */}
      <div className="py-40 relative before:absolute before:inset-0 before:bg-[#01060F] before:opacity-80" style={{ backgroundImage: `url(${IMAGES.Inventory_Hero_Bg})`, backgroundPosition: "center", backgroundSize: "cover" }}>
        {/* content */}
        <div className="relative z-10">
          <h1 className="text-center text-white font-bold text-[40px]">404 Error</h1>
          <p className="text-white font-medium mt-2 flex items-center justify-center">
            Home
            <FontAwesomeIcon icon={faAngleDoubleRight} className='mx-1' />
            <span className='text-[var(--theme-color)]'>404 Error</span></p>
        </div>
      </div>

      <div className="custom-container py-30 px-5 flex flex-col items-center">
        <img src={IMAGES.Page404} className='max-w-[700px]' alt="" />
        <h1 className="text-[var(--dark-color)] font-bold text-[30px] sm:text-[35px] md:text-[45px] my-[10px]">Opos... Page Not Found!</h1>
        <p className="text-[var(--body-text-color)] leading-[1.8rem] mb-[25px]">The page you looking for not found may be it not exist or removed.</p>
        <Link to={"/"}>
          <Button
            text={"Go Back Home"}
            icon={faHome}
            className='flex-row-reverse'
          />
        </Link>
      </div>
    </div>
  )
}
