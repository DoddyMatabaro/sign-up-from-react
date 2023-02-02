import React, { useRef, useState } from 'react'
import { ContactEmergency } from '@mui/icons-material'

function From() {
    const [focus, setFocus] = useState(false);
    const parentInput = useRef<HTMLDivElement>(null);
    
    if(parentInput.current){
        parentInput.current.parentElement?.classList.add("border", "border-sky-700");
    }

  return (
   <div className='h-full w-full flex flex-col gap-8 justify-center'>
        <h3 className='font-bold text-[14px] text-gray-600'>START FOR FREE</h3>
        <div className='flex flex-row items-center gap-2'>
        <h2 className='text-4xl text-gray-200 font-bold'>Create new account<span className='text-sky-500'>.</span></h2>
        </div>
        <p>Already A Member? <a href='#' className='text-sky-700 '>Log In</a></p>
        <div className='flex flex-col justify-between'>
            <div className='flex flex-col w-1/2 bg-gray-900 py-2 px-4 rounded-[18px]  focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500'>
                <label className='text-[10px]'>
                    First name
                </label>
                    <div ref={parentInput} className='flex flex-row items-center justify-evenly outline-none max-w-full outline-none text-[12px]'>
                        <input type="text" className='outline-none mx-r-2 px-2  bg-transparent text-gray-100 ' onClick={()=>setFocus(!focus)} placeholder='First name'  />
                        <ContactEmergency className='text-gray-900' sx={{fontSize:14}}/>
                    </div>
            </div>
            <button>Change method</button>
            <button>Create account</button>
        </div>
   </div>
  )
}

export default From