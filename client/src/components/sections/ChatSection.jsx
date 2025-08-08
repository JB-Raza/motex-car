import { useState } from 'react'
import { Button, Message } from '../universalComponents'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

export default function ChatSection({ chat }) {
    const [message, setMessage] = useState("")
    if (!chat) return
    return (
        <div className='flex flex-col justify-between gap-y-5 h-full'>
            {/* messages */}
            <div className="flex flex-col custom-scrollbar px-5 gap-y-5 h-full overflow-y-auto">
                {(chat.messages || []).map((message) => (
                    <Message data={{ sender: message.sender, profilePic: chat.profilePic, message: message.message, }} />
                ))}
            </div>

            {/* form to send message */}
            <form
                className='px-5 mt-auto'
                onSubmit={(e) => e.preventDefault()}>
                <textarea name="message" id="message" value={message} onChange={(e) => setMessage(e.target.value)} rows={3} className='mt-2 text-sm sm:text-[16px] py-3.5 px-4 w-full outline-none border rounded-xl bg-white border-neutral-200 focus:border-green-500 resize-none mb-3' placeholder='Your Message'></textarea>
                <Button text={"Send Message"} icon={faPaperPlane} />

            </form>
        </div>
    )
}
