import React from 'react'
import { FaCaretDown } from 'react-icons/fa6'
import { MdCropSquare, MdInbox, MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import { IoMdRefresh, IoMdMore } from "react-icons/io";
import { GoTag } from "react-icons/go";
import { FaUserFriends } from "react-icons/fa";
import { RiErrorWarningLine } from "react-icons/ri";
import { useState } from 'react';
import Messages from '../Messages';
const mailType = [
  { text: 'Primary', icon: <MdInbox size={20} /> },
  { text: 'Promotions', icon: <GoTag size={20} /> },
  { text: 'Social', icon: <FaUserFriends size={20} /> },
  { text: 'Updates', icon: <RiErrorWarningLine size={20} className='transform rotate-180' /> }
]
const Inbox = () => {
  const [mailTypeSelected, setmailTypeSelected] = useState(0);
  return (
    <div className='flex-1 bg-white rounded-xl mx-5'>
      <div className='flex items-center justify-between px-4'>
        <div className='flex items-center gap-2 text-gray-700 py-2 '>
          <div className='flex items-center gap-1 '>{/*//py-2.5 hover:bg-gray-200 */}
            <MdCropSquare size={20} className='hover:bg-gray-100 cursor-pointer' />
            <FaCaretDown size={20} className='hover:bg-gray-100 cursor-pointer' />
          </div>
          <div className='p-2 rounded-full  hover:bg-gray-100 cursor-pointer'>
            <IoMdRefresh size={20} />
          </div>
          <div className='p-2 rounded-full  hover:bg-gray-100 cursor-pointer'>
            <IoMdMore size={20} />
          </div>
        </div>
        <div className='flex gap-2'>
          <p className='text-gray-600 text-sm py-2 px-3  rounded-sm hover:bg-gray-100  hover:border-2 hover:cursor-pointer'>1-50 of 100</p>
          <button><MdKeyboardArrowLeft size={20}/></button>
          <button><MdKeyboardArrowRight size={20}/></button>
        </div>
      </div>
      <div className='h-[80vh] overflow-y-auto'>
        <div className='flex items-center gap-1'>
          {mailType.map((items, index) => {
            // const Icon = items.icon;
            return (
              <div key={index}
                onClick={() => setmailTypeSelected(index)}
                className={`${mailTypeSelected == index ? 'border-b-4 border-b-blue-500' : 'border-b-4 border-b-transparent'} flex items-center w-60 p-3 mt-2  rounded-sm cursor-pointer gap-5 hover:bg-gray-100`}>
                {items.icon}
                <span >{items.text}</span>
              </div>

            )
          })}
        </div>
        <Messages />
      </div>
    </div>
  )
}

export default Inbox
