import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Button({
    text,
    onClick,
    icon,
    bgColor = "bg-[var(--theme-color)]",
    hoverBg = "bg-[var(--dark-color)]",
    className = "",
}) {
    return (
        <button
            onClick={onClick}
            className={`group/button flex justify-center items-center gap-x-1 ${bgColor} cursor-pointer overflow-clip font-bold text-white relative py-3.5 px-5 transition-all duration-500 rounded-xl ${className}`}>

            {/* overlay */}
            <div className={`w-0 h-0 group-hover/button:w-[400px] group-hover/button:h-[400px] scale-150 transition-all duration-700 ease rounded-full absolute z-[10] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${hoverBg}`}></div>
            {icon &&
                <span>
                    <FontAwesomeIcon icon={icon} className='relative z-[12]' />
                </span>}
            <span className='relative z-[12]'>{text}</span>

        </button>
    )
}
