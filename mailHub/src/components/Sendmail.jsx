import { RxCross2 } from "react-icons/rx";
import {useDispatch,  useSelector } from "react-redux";
import { setOpen } from "./redux/appSlice";
 

const Sendmail = () => {
  const open = useSelector(store=>store.app.open)
  const dispatch = useDispatch();
  // const open = true;
  return (
    <div className={`${open?'block':'hidden'} bg-white max-w-6xl shadow-xl shadow-slate-500 rounded-t-md`}>
      <div className='flex bg-[#F2F6FC] py-2 px-3 rounded-t-md justify-between'>
        <h2>New Message</h2>
        <div onClick={()=>dispatch(setOpen(false))} className='p-2 rounded-full hover:bg-gray-200 cursor-pointer'>
          <RxCross2 size={16} />
        </div>
      </div>

      <form action="" className='flex flex-col p-3 gap-2'>
        <p>  From SintuKumar &lt;intern49767@gmail.com&gt;</p>
        <input type="text" placeholder='To' className='outline-none py-1 border-b border-gray-200' />
        <input type="text" placeholder='Subject' className='outline-none py-1 border-b border-gray-200' />
        <textarea name="message" cols={30} rows={10} className='py-1 outline-none'></textarea>
        <button type='submit' className='rounded-full w-fit text-white bg-blue-500 px-3'>Send</button>
      </form>

    </div>
  )
}

export default Sendmail
