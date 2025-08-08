import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useRef, useState } from 'react'

export default function ScrollHeightTracker() {

    // track scroll progress
    const scrollBtnRef = useRef()
    const [scrollPercent, setScrollPercent] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            const currentScroll = window.scrollY;
            const scrolled = (currentScroll / totalHeight) * 100;
            setScrollPercent(scrolled)
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);



    return (
        <div>
            {/* scroll progress icon */}

            <button
                onClick={() => {
                    window.scrollTo({ behavior: "smooth", top: 0 })
                }}
                ref={scrollBtnRef} aria-label='go to top'
                className={`cursor-pointer z-[200] ${window.scrollY <= 80 ? "opacity-0 invisible translate-y-full" : "opacity-100 visible translate-y-0"} transition-all duration-500 bg-[var(--theme-color)] h-12 w-12 rounded-xl fixed overflow-hidden bottom-5 shadow-lg shadow-[rgba(0,0,0,0.4)] right-10`}
            >
                <FontAwesomeIcon icon={faArrowUp} className='text-white text-[18px]' />
            </button>
        </div>
    )
}
