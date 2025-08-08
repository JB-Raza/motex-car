import { faX } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Modal({
    children,
    isModalOpen,
    className = "",
    onClose = null,
}) {
    if (!isModalOpen) return

    return (
        <div className={`absolute rounded-lg min-h-[300px] min-w-[500px] z-[210] bg-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${className}`}>
            {/* head */}
            <div className="py-3 px-5 border-b border-neutral-200">
                <button
                    onClick={onClose}
                    className="ms-auto cursor-pointer hover:text-white hover:bg-[var(--theme-color)] rounded-sm w-[30px] h-[30px] flex items-center justify-center">
                    <FontAwesomeIcon icon={faX} className="text-sm" />
                </button>
            </div>
            {/* body */}
            <div className="p-5">
                {children}
            </div>
        </div>
    )
}
