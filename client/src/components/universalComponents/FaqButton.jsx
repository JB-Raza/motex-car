import { faAngleDown, faQuestion } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useRef } from "react"


export default function FaqButton({ question, answer, isOpen, onToggle }) {
    const answerRef = useRef()

    useEffect(() => {
        if (isOpen && answerRef.current) {
            answerRef.current.style.maxHeight = `${answerRef.current.scrollHeight + 20}px`
        }
        else {
            answerRef.current.style.maxHeight = `${0}px`
        }
    }, [isOpen])
    return (
        <div className="flex max-w-[700px] mx-auto flex-col gap-4" >
            <div className="faq shadow-[1px_1px_30px_5px_rgba(0,0,0,0.05)] rounded-xl">
                <button
                    onClick={onToggle}
                    className={`cursor-pointer text-[18px] flex justify-between gap-3 items-center font-bold py-5 px-7 w-full transition-[border-radius]  ${isOpen ? "rounded-t-2xl" : "rounded-2xl duration-1000"}`}>
                    <div className="flex items-center gap-x-2">
                        <div className="flex items-center justify-center rounded-lg sm:rounded-xl bg-[var(--theme-color)] min-w-[35px] h-[35px] sm:min-w-[45px] sm:w-[45px] sm:h-[45px] text-white">
                        <FontAwesomeIcon icon={faQuestion} />
                        </div>
                        <span className={`text-start  text-[16px] sm:text-[20px] capitalize ${isOpen ? "text-[var(--theme-color)]" : ""}`}>{question}</span>
                    </div>
                    <FontAwesomeIcon icon={faAngleDown}
                        className={`transition-rotate duration-200 ${isOpen ? "rotate-180" : ""}`}
                    />
                </button>
                <div ref={answerRef}
                    className='overflow-clip transition-all duration-300'>
                    <p className={`overflow-clip text-[16px] leading-[1.8rem] tracking-[0.32px] px-6 pt-4 pb-9 border-t-1 transition-colors duration-500 ${isOpen ? "border-[var(--theme-color)]" : "border-transparent"} rounded-b-2xl`}>
                        {answer}
                    </p>
                </div>
            </div>
        </div>
    )
}

