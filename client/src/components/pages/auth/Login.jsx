import { useState, useCallback } from 'react'
import { InputBox, Button } from '../../universalComponents/index.js'
import { Link, useNavigate } from 'react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { ICONS, IMAGES } from '../../../files.js'
import { FaFacebookF, FaGoogle, FaTwitter } from 'react-icons/fa'


export default function Login() {

    const [formData, setFormData] = useState({ email: "", password: "" })

    const navigate = useNavigate()

    const handleInputChange = useCallback((e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }, [formData])

    const handleFormSubmit = (e) => {
        e.preventDefault()
        try {
            localStorage.setItem("accessToken", "token")
            navigate("/dashboard")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>

            {/* hero */}
            <div className="py-40 relative before:absolute before:inset-0 before:bg-[#01060F] before:opacity-80" style={{ backgroundImage: `url(${IMAGES.Inventory_Hero_Bg})`, backgroundPosition: "center", backgroundSize: "cover" }}>
                {/* content */}
                <div className="relative z-10">
                    <h1 className="text-center text-white font-bold text-[40px]">Login</h1>
                    <p className="text-white font-medium mt-2 flex items-center justify-center">
                        Home
                        <FontAwesomeIcon icon={faAngleDoubleRight} className='mx-1' />
                        <span className='text-[var(--theme-color)]'>Login</span></p>
                </div>
            </div>

            <div className="custom-container !my-30">

                <form
                    className='rounded-xl max-w-[500px] bg-white shadow-[1px_1px_30px_5px_rgba(0,0,0,0.05)] mx-auto px-5 sm:px-10 py-12 flex flex-col'>

                    <img src={ICONS.Logo} alt="logo" className='max-w-[200px] mx-auto' />
                    <p className="text-[16px] sm:text-[20px] text-[var(--body-text-color)] text-center mt-3 mb-14">Login with your motex account</p>

                    <div className="mb-5">
                        <InputBox label={"Email Address"} type='email' name='email' required={true} placeholder={"Info@gmail.com"} value={formData.email} onChange={handleInputChange} />
                    </div>
                    <div className="">
                        <InputBox label={"Password"} type='password' name='password' required={true} placeholder={"**********"} value={formData.password} onChange={handleInputChange} />
                    </div>

                    <div className="flex flex-wrap justify-between items-center px-3 mt-3">
                        <div className="checkbox flex gap-2 items-center">
                            <input type="checkbox" id='remeberMe' className='h-[17px] accent-[var(--theme-color)] w-[17px]' />
                            <label htmlFor="remeberMe" className='text-[var(--dark-color)] select-none'>Remeber me</label>
                        </div>
                        <Link to={"/auth/forgot-password"} className='text-[var(--theme-color)] font-normal leading-[26px] tracking-[-1px]'>Forgot Password?</Link>
                    </div>

                    <div className="flex flex-col mt-10 gap-3 items-center">
                        <Button
                            onClick={handleFormSubmit}
                            text={"Login"}
                            icon={faArrowRightFromBracket}
                            className={"w-full"} />

                        <p className='mt-4 text-[var(--body-text-color)] select-none'>Don't have an account? <Link to={"/auth/register"} className='text-[var(--theme-color)]'>Register</Link></p>

                        <hr className="border-b- my-1 w-full border-gray-200" />

                        <div className="">
                            <p className='text-[var(--body-text-color)] select-none'>Continue with social media</p>

                            <div className="flex items-center mt-5 justify-center gap-3">

                                <div className="text-white hover:bg-[var(--dark-color)] transition-colors duration-300 cursor-pointer min-w-[40px] h-[40px] rounded-full bg-[var(--theme-color)] flex items-center justify-center">
                                    <FaFacebookF />
                                </div>
                                <div className="text-white hover:bg-[var(--dark-color)] transition-colors duration-300 cursor-pointer min-w-[40px] h-[40px] rounded-full bg-[var(--theme-color)] flex items-center justify-center">
                                    <FaGoogle />
                                </div>
                                <div className="text-white hover:bg-[var(--dark-color)] transition-colors duration-300 cursor-pointer min-w-[40px] h-[40px] rounded-full bg-[var(--theme-color)] flex items-center justify-center">
                                    <FaTwitter />
                                </div>
                            </div>
                        </div>

                    </div>

                </form>

            </div>

        </div>
    )
}
