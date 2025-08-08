import React, { useState } from 'react'
import { FaEye, FaRegEye, FaRegEyeSlash } from 'react-icons/fa'

export default function InputBox({ label, name, type = "text", value, onChange, placeholder, required = false, className }) {
    const [isPassword, setisPassword] = useState(type == "password")
    return (
        <div>
            {label && <label htmlFor={name} className='text-[var(--dark-color)]'>{label}</label>}
            <div className={`relative group ${label ? "mt-2" : ""}`}>
                <input type={isPassword ? "password" : type == "password" ? "text" : type} name={name} required={required} value={value} onChange={onChange} placeholder={placeholder} className={`peer/input-field text-sm sm:text-[16px] py-3.5 px-4 w-full outline-none transition-all duration-300 focus:border-[var(--theme-color)] border rounded-xl border-neutral-200 ${className}`} />
                {type == "password" ?
                    isPassword ?
                        <FaRegEye onClick={() => setisPassword(p => !p)} className='absolute top-1/2 right-5 -translate-y-1/2 text-[18px] text-[var(--theme-color)] cursor-pointer invisible opacity-0 group-hover:opacity-80 group-hover:visible peer-focus/input-field:opacity-80 peer-focus/input-field:visible' />
                        : <FaRegEyeSlash onClick={() => setisPassword(p => !p)} className='absolute top-1/2 right-5 -translate-y-1/2 text-[18px] text-[var(--theme-color)] cursor-pointer invisible opacity-0 group-hover:opacity-80 group-hover:visible peer-focus/input-field:opacity-80 peer-focus/input-field:visible' />
                    : null}
            </div>
        </div>
    )
}
