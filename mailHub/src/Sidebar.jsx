import React from 'react'
import { MdOutlineDrafts, MdOutlineExpandMore } from "react-icons/md";
import {
  LuInbox,
  LuStar,
  LuClock,
  LuSend,
  LuShoppingBag,
  LuPencil,
} from 'react-icons/lu';
import { FaPlus } from 'react-icons/fa6';


const Sidebar = () => {

  const sideItems = [
    { text: 'Inbox', icon: LuInbox, active: true },
    { text: 'Starred', icon: LuStar },
    { text: 'Snoozed', icon: LuClock },
    { text: 'Sent', icon: LuSend },
    { text: 'Draft', icon: MdOutlineDrafts },
    { text: 'Purchase', icon: LuShoppingBag },
    { text: 'More', icon: MdOutlineExpandMore },
  ];
  return (
    <div className='w-[15%]'>
      <div className='p-3 '>
        <button className='bg-[#C2E7FF] flex gap-2 text-center p-4 rounded-2xl hover:shadow-md cursor-pointer'>
          <LuPencil size={20} />
          Compose
        </button>
      </div>
      <div className='mt-3 text-gray-500 w-[95%]'>
        <ul className='list-none flex flex-col gap-1'>
          {sideItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <li
                key={index}
                className={`flex items-center gap-3 px-5 py-1.5 rounded-r-full cursor-pointer transition-colors duration-150 w-full
              ${item.active
                    ? 'bg-[#D3E3FD] text-black'
                    : 'hover:bg-gray-200 text-gray-600'
                  }`}
              >
                <Icon size={18} />
                <span className='text-sm'>{item.text}</span>
              </li>
            );
          })}
        </ul>
      </div>
      <div className='mt-4'>
      <div className='flex justify-between px-4 items-center'>
        <h1 className='font-medium'>Labels</h1>
        <span className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-200 cursor-pointer transition-all duration-300 ease-in-out">
  <FaPlus size={20} />
</span>

        </div>
      </div>

    </div>
  )
}

export default Sidebar
