import { useState } from 'react'
import { IMAGES } from '../../../files'
import { sampleChatsData } from '../../../sampleData'
import { ChatSection } from '../../sections'
import { ChatCard } from '../../universalComponents/index'

export default function Messages() {

  const [activeChat, setActiveChat] = useState()



  return (
    <div>
      <div className="px-5 py-3 bg-white rounded-lg shadow-[1px_1px_30px_5px_rgba(0,0,0,0.05)]">
        <div className="flex justify-between items-center">
          <h4 className="text-[20px] text-[var(--dark-color)] font-semibold">Messages</h4>
          {activeChat?.profilePic && <img src={activeChat.profilePic} className='w-[45px] h-[45px] rounded-full' alt="error" />}
        </div>
        <hr className="border-b- border-neutral-200 my-4" />

        <div className="grid grid-cols-12">
          {/* account chats */}
          <div className="col-span-5 p-2">
            <div className="flex flex-col min-h-[300px] max-h-[700px] custom-scrollbar overflow-y-auto overflow-x-clip border border-neutral-200 rounded-lg scrollbar-thin">
              {/* chat cards */}
              {(sampleChatsData || []).map((chat, i) => (
                <ChatCard key={i}
                  onClick={() => setActiveChat(chat)}
                  data={chat} />
              ))}

            </div>
          </div>
          {/* messages section */}
          <div className="col-span-7">

            <div className=" min-h-[300px] h-full max-h-[700px] overflow-y-auto custom-scrollbar">

              <ChatSection chat={activeChat} />

            </div>


          </div>
        </div>
      </div>
    </div>
  )
}
