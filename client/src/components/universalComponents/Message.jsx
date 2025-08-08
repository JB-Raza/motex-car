// import React from 'react'
// import { IMAGES } from '../../files'

// export default function Message({ data }) {
//     // data = {sender: "you or someone", message: "", profilePic}
//     return (
//         <div className={`flex gap-x-5 ${data?.sender == "you" ? "flex-row-reverse" : " items-start"}`}>
//             {/* profile image */}
//             <div className="min-w-[50px] w-[50px] h-[50px] rounded-full flex items-center justify-center">
//                 <img src={data.profilePic || IMAGES.Chat_1} alt="chat 1" className="w-[50px] h-[50px] rounded-full" />
//             </div>
//             {/* message */}
//             <div className={`p-5 rounded-xl w-full relative before:absolute before:w-[15px] before:h-[15px] before:rotate-45 ${data?.sender == "you" ? "bg-[#E6F9F5] before:right-0 before:translate-x-1/2 before:bg-[#E6F9F5]" : "bg-[#F4F5F7] before:left-0 before:-translate-x-1/2 before:bg-[#F4F5F7]"}`}>
//                 <p className={`text-wrap text-[15px] leading-[25px] ${data?.sender == "you" ? "text-[#29BF6C]" : "text-[#757f95]"}`}>{data.message}</p>
//             </div>
//         </div>
//     )
// }

import { IMAGES } from '../../files';

export default function Message({ data }) {
    const isYou = data?.sender === "me";
    const bubbleBg = isYou ? "bg-[#E6F9F5]" : "bg-[#F4F5F7]";
    const arrowBg = isYou ? "before:bg-[#E6F9F5] before:right-0 before:translate-x-1/2" : "before:bg-[#F4F5F7] before:left-0 before:-translate-x-1/2";
    const textColor = isYou ? "text-[#29BF6C]" : "text-[#757f95]";

    return (
        <div className={`flex gap-x-5 ${isYou ? "flex-row-reverse" : "items-start"}`}>
            {/* Profile Image */}
            <div className="min-w-[50px] h-[50px] rounded-full overflow-hidden">
                <img src={isYou ? IMAGES.Chat_1 : data.profilePic} alt="profile" className="w-full h-full object-cover" />
            </div>

            {/* Message Bubble */}
            <div className={`relative p-5 rounded-xl w-full before:absolute before:w-[15px] before:h-[15px] before:rotate-45 ${bubbleBg} ${arrowBg}`}>
                <p className={`text-[15px] leading-[25px] text-wrap ${textColor}`}>
                    {data.message}
                </p>
            </div>
        </div>
    );
}
