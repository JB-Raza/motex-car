import { faAngleDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useRef, useState } from "react"

export default function SelectOption({ name, onChange, item, className }) {
    // item = {label: ", options: []}

    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const [currVal, setCurrVal] = useState(item.options[0])
    const dropdownRef = useRef()
    const dropdownBtnRef = useRef()

    // open/close dropdown
    useEffect(() => {
        const el = dropdownRef.current
        if (!el) return
        if (isDropdownOpen) {
            el.style.maxHeight = `${el.scrollHeight + 10}px`
        }
        else {
            el.style.maxHeight = "0px"
        }

    }, [isDropdownOpen])

    // click outside to close
    useEffect(() => {
        function clickOutside(e) {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target) && dropdownBtnRef.current && !dropdownBtnRef.current.contains(e.target)) {
                setIsDropdownOpen(false)
            }
        }

        window.addEventListener("click", clickOutside)
        return () => window.removeEventListener('click', clickOutside)

    }, [])

    // change value logic


    return (
        <div className=''>
            <label className='text-[var(--dark-color)]'>{item?.label}</label>
            <div className={`${item.label ? "mt-3" : ""} relative`}>
                <button
                    ref={dropdownBtnRef}
                    onClick={() => setIsDropdownOpen(p => !p)}
                    className={`py-3.5 px-4 border focus:outline-1 outline-[var(--theme-color)] flex justify-between items-center gap-x-5 w-full border-neutral-200 rounded-lg ${className}`}>
                    <span className='text-neutral-500'>{currVal}</span>
                    <FontAwesomeIcon icon={faAngleDown} className={`text-neutral-500 transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : "rotate-0"}`} />
                </button>


                {/* dropdown */}
                <div ref={dropdownRef} className={`shadow-lg shadow-[rgba(0,0,0,0.05)] absolute z-[10] top-[calc(100%+1px)] w-full rounded-md bg-white py-2 px-3 transition-all duration-300 ${isDropdownOpen ? "scale-100 translate-y-0 opacity-100" : "opacity-0 scale-0 -translate-y-1/2"}`}>
                    {item.options?.map((option, index) => (
                        <p key={index} onClick={() => {
                            setCurrVal(option)
                            setIsDropdownOpen(false)
                        }} className={`hover:bg-[var(--light-theme-color)] hover:text-[var(--theme-color)] transition-all duration-150 rounded-md py-2 px-3 cursor-pointer ${currVal == option ? "font-bold text-[var(--theme-color)]" : "text-neutral-600"} capitalize`}>{option}</p>
                    ))}
                </div>
            </div>
        </div>
    )
}