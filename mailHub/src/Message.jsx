import React from 'react'
import { CiStar } from "react-icons/ci";
import { IoMdSquareOutline } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const Message = () => {
   const navigate =useNavigate();
   const openMail =()=>{
    navigate("/mail/23y98uu23091")
   }
  return (
    <div onClick={openMail
    }
    className='flex items-center py-2.5 px-4 border-b-2 border-b-gray-200 hover:cursor-pointer hover:shadow-md'>
      <div className='flex items-center gap-3'>
        <div className=' text-gray-500'>
          <IoMdSquareOutline size={20} />
        </div>
        <div className='text-gray-500'>
          <CiStar size={20} />
        </div>
      </div>
      <div className='flex-1 ml-4'>
        <p className=' font-medium text-gray-600 truncate inline-block max-w-full '>
          <span className='font-bold mx-2 text-[16px]'>Lorem ipsum dolor</span>sit amet consectetur adipisicing elit. Commodi, impedit.</p>
      </div>
      <div className='flex-none text-sm text-gray-600'>
        time aega
      </div>
    

    </div>

  )
}

export default Message
