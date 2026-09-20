import React from 'react';
import { IoMdMore, IoMdArrowBack } from "react-icons/io";
import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdDeleteOutline,
  MdOutlineReport,
  MdOutlineMarkEmailUnread,
  MdOutlineWatchLater,
  MdOutlineAddTask,
  MdOutlineDriveFileMove,
} from "react-icons/md";
import { BiArchiveIn } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';

const Mail = () => {
 const navigate =useNavigate();
  return (
    <div className='flex-1 bg-white rounded-xl mx-4'>
      <div className='flex items-center justify-between px-4 shadow-md'>
        <div className='flex items-center py-3 gap-3 text-gray-700 '>
          <div onClick={()=>navigate('/')} className='p-3 cursor-pointer rounded-full hover:bg-gray-200'><IoMdArrowBack size={22} />
          </div>
          <div className='p-3 cursor-pointer rounded-full hover:bg-gray-200'><BiArchiveIn size={22} />
          </div>
          <div className='p-3 cursor-pointer rounded-full hover:bg-gray-200'><MdOutlineReport size={22} />
          </div>
          <div className='p-3 cursor-pointer rounded-full hover:bg-gray-200'><MdDeleteOutline size={22} />
          </div>
          <span className='text-gray-200'>|</span>
          <div className='p-3 cursor-pointer rounded-full hover:bg-gray-200'><MdOutlineMarkEmailUnread size={22} />
          </div>
          <div className='p-3 cursor-pointer rounded-full hover:bg-gray-200'><MdOutlineDriveFileMove size={22} />
          </div>
          <div className='p-3 cursor-pointer rounded-full hover:bg-gray-200'><IoMdMore size={22} />
          </div>
        </div>
        <div className='flex items-center gap-3 px-5 text-gray-400'>
          <button>
            <MdKeyboardArrowLeft size={20} />
          </button>
          <button>
            <MdKeyboardArrowRight size={20} />
          </button>
        </div>
      </div>
      <div className='h-[80vh] overflow-y-auto p-4'>
        <div className='flex items-center justify-between  gap-1'>
          <div className='flex items-center gap-2'>
            <h1 className='text-xl font-medium'>Subject</h1>
            <span className='text-sm bg-gray-200 rounded-md px-2'>inbox</span>
          </div>
          <div className='flex-none text-gray-400 my-4 text-sm'>
            <p>20-09-2026</p>
          </div>
        </div>
        <div className='text-sm text-gray-500'>
          <h1>Shiva@gmail.com</h1>
          <span>to me</span>
        </div>
        <div className='my-10'>
          <h1>Message</h1>
        </div>

      </div>
    </div>
  )
}

export default Mail
