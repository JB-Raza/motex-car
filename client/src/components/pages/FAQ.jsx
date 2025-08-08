import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IMAGES } from '../../files'
import { useState } from 'react'
import { FaqButton } from '../universalComponents'

export default function FAQ() {

    const [openIndex, setOpenIndex] = useState(0)

    return (
        <div>
            {/* hero */}
            <div className="py-40 relative before:absolute before:inset-0 before:bg-[#01060F] before:opacity-80" style={{ backgroundImage: `url(${IMAGES.Inventory_Hero_Bg})`, backgroundPosition: "center", backgroundSize: "cover" }}>
                {/* content */}
                <div className="relative z-10">
                    <h1 className="text-center text-white font-bold text-[40px]">Frequently Asked Questions</h1>
                    <p className="text-white font-medium mt-2 flex items-center justify-center">
                        Home
                        <FontAwesomeIcon icon={faAngleDoubleRight} className='mx-1' />
                        <span className='text-[var(--theme-color)]'>Faq</span></p>
                </div>
            </div>

{/* faq */}
            <div className="py-30 custom-container px-5">
                <div className="grid grid-cols-1 md-lg:grid-cols-2 gap-y-6 gap-x-6">
                    <div>
                        <h4 className="tracking-[3px] font-bold text-sm sm:text-[17px] uppercase text-[var(--theme-color)] mb-5">Faq's</h4>
                        <h2 className="font-bold capitalize text-[var(--dark-color)] text-[25px] leading-[30px] sm:text-[35px] sm:leading-[45px] md:leading-[50px] md:text-[45px] mb-5">General <span className='text-[var(--theme-color)]'>frequently</span> asked questions</h2>

                        <p className="text-[var(--body-text-color)] leading-[1.8rem] mb-3">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even.</p>

                        <img src={IMAGES.FAQ_CAR} className='rounded-xl' alt="" />
                    </div>
                    {/* faq */}
                    <div className='flex flex-col gap-y-5'>
                        {(FAQ_Data || []).map((FAQ, index) => (

                            <FaqButton key={index}
                                isOpen={openIndex == index}
                                onToggle={() => setOpenIndex(openIndex == index ? null : index)}
                                question={FAQ.question}
                                answer={FAQ.answer}
                            />
                        ))}
                    </div>

                </div>
            </div>
        </div>
    )
}


const FAQ_Data = [
    {
        question: "How long does a car buy take?",
        answer: "We denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire. Ante odio dignissim quam, vitae pulvinar turpis erat ac elit eu orci id odio facilisis pharetra."
    },
    {
        question: "How can i become a Member?",
        answer: "We denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire. Ante odio dignissim quam, vitae pulvinar turpis erat ac elit eu orci id odio facilisis pharetra."
    },
    {
        question: "what payment gateway you support?",
        answer: "We denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire. Ante odio dignissim quam, vitae pulvinar turpis erat ac elit eu orci id odio facilisis pharetra."
    },
    {
        question: "how can i cancel my request?",
        answer: "We denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire. Ante odio dignissim quam, vitae pulvinar turpis erat ac elit eu orci id odio facilisis pharetra."

    }
];
