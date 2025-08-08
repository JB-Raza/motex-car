import { useState, useCallback } from 'react'
import { InputBox, Button } from '../../universalComponents/index.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight, faKey } from '@fortawesome/free-solid-svg-icons'
import { ICONS, IMAGES } from '../../../files.js'


export default function ForgotPassword() {

  const [formData, setFormData] = useState({ email: "" })


  const handleInputChange = useCallback((e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }, [formData])

  const handleFormSubmit = (e) => {
    e.preventDefault()
    
  }

  return (
    <div>

      {/* hero */}
      <div className="py-40 relative before:absolute before:inset-0 before:bg-[#01060F] before:opacity-80" style={{ backgroundImage: `url(${IMAGES.Inventory_Hero_Bg})`, backgroundPosition: "center", backgroundSize: "cover" }}>
        {/* content */}
        <div className="relative z-10">
          <h1 className="text-center text-white font-bold text-[40px]">Forgot Password</h1>
          <p className="text-white font-medium mt-2 flex items-center justify-center">
            Home
            <FontAwesomeIcon icon={faAngleDoubleRight} className='mx-1' />
            <span className='text-[var(--theme-color)]'>Forgot Password</span></p>
        </div>
      </div>

      <div className="custom-container !my-30">

        <form
          className='rounded-xl max-w-[500px] bg-white shadow-[1px_1px_30px_5px_rgba(0,0,0,0.05)] mx-auto px-5 sm:px-10 py-12 flex flex-col'>

          <img src={ICONS.Logo} alt="logo" className='max-w-[200px] mx-auto' />
          <p className="text-[16px] sm:text-[20px] text-[var(--body-text-color)] text-center mt-3 mb-14">Reset your motex account password</p>
          <div className="mb-5">
            <InputBox label={"Email Address"} type='email' name='email' required={true} placeholder={"Info@gmail.com"} value={formData.email} onChange={handleInputChange} />
          </div>

          <div className="flex flex-col gap-3 items-center">
            <Button
              onClick={handleFormSubmit}
              text={"Send Reset Link"}
              icon={faKey}
              className={"w-full"} />

          </div>

        </form>

      </div>

    </div>
  )
}
