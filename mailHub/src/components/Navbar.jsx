import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { LuSearch } from "react-icons/lu";
import { MdOutlineContactSupport } from "react-icons/md"
import { MdOutlineSettings } from "react-icons/md";
import { PiDotsNineBold } from "react-icons/pi";
import { FaCircleUser } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className='flex items-center justify-between mx-3 h-14'>
      <div className='flex items-center gap-10'>
        <div className='flex items-center gap-2'>
          <div className='p-3 rounded-full hover:bg-gray-100 cursor-pointer'>
            <RxHamburgerMenu size={'25px'} />
          </div>
          <img src="https://mailmeteor.com/logos/assets/PNG/Gmail_Logo_512px.png" width={"30px"} alt="gmail_logo" />
          <h1 className=' mr-5 text-2xl font-medium bg-clip-text text-transparent bg-linear-to-r from-[#EA8D8D] to-[#A890FE]'>MailPro</h1>
        </div>
      </div>
      <div className='md:block hidden w-[50%]'>
        <div className='flex items-center bg-[#EAF1FB] ml-4 px-2 py-2.5 rounded-full'>
          <LuSearch size={"24px"} />
          <input type="text"
            className='w-full rounded-full bg-transparent outline-none px-1.5 text-[18px] font-extralight'
            placeholder='Search Mail here..' />
        </div>
      </div>
      <div className='md:block hidden '>
        <div className='flex item-center gap-4 cursor-pointer'>
          <div className='rounded-full hover:bg-gray-100'>
            <MdOutlineContactSupport size={"24px"} />
          </div>
          <div className='rounded-full hover:bg-gray-100'>
            <MdOutlineSettings  size={"24px"} />
          </div>
          <div className='rounded-full hover:bg-gray-100'>
            <PiDotsNineBold size={"24px"} />
          </div>
        </div>
      </div>
      <div className='cursor-pointer mr-5 hover:bg-gray-200 rounded-full'>
<FaCircleUser size={"36px"} />
      </div>
    </div>
  )
}

export default Navbar
