import React from 'react'
import assets from '../assets/assets'
const ChatContainer = ({selectedUser,setSelectedUser}) => {
  return selectedUser ? (
    <div className='h-full overflow-scroll relative backdrop-blur-lg'>
      <div className='flex items-center gap-3 py-3 mx-4 border-b border-stone-500'>
        <img src={assets.profile_martin} alt="" className='w-8 rounded-full' />
        <p className='flex-1 text-white flex items-center gap-2'>Muhammad Safwan
           <span className='w-2 h-2 rounded-full bg-screen-500'></span>
        </p>
       <img src={assets.arrow_icon} onClick={()=>setSelectedUser(null)} alt=""className='md:hidden mx-w-7' />
      <img src={assets.help_icon} alt="" className='mx-md:hidden max-w-5' />
      </div>
    </div>
  ): <div className='flex flex-col items-center justify-center gap-2 text-gray-500 bg-white/10 max-md:hidden'>
    <img src={assets.logo_icon} className='max-w-16' alt="" />
    <p className='text-lg font-medium text-white'>
      Chat Anytime Anywhere
    </p>
  </div>
}

export default ChatContainer