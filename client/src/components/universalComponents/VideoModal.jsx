import { faX } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect } from "react"

export default function VideoModal({
    children,
    isModalOpen,
    className = "",
    onClose = null,
}) {

    useEffect(() => {
        const wrapper = document.getElementById("body-wrapper")
        if (isModalOpen) {
            wrapper.style.backgroundColor = "rgba(0,0,0,0.55)"
            wrapper.style.inset = "0px"
            document.body.style.overflow = "hidden"
        }
        

        return () => {
            wrapper.style.backgroundColor = "none"
            wrapper.style.inset = "auto"
            document.body.style.overflow = "auto"


        };
    }, [isModalOpen])

    if (!isModalOpen) return


    return (
        <div className={`absolute rounded-lg min-h-[400px] min-w-[800px] z-[210] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${className}`}>
            {/* head */}
            <div className="">
                <button
                    onClick={onClose}
                    className="ms-auto cursor-pointer text-white rounded-sm w-[30px] h-[30px] flex items-center justify-center">
                    <FontAwesomeIcon icon={faX} className="text-sm" />
                </button>
            </div>
            {/* body */}
            <div className="">
                {children}
            </div>
        </div>
    )
}
