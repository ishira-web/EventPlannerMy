import { Info } from 'lucide-react'
import React from 'react'

function ThankYouSide() {
  return (
    <div className='w-[18rem] h-[12rem] bg-white rounded-4xl '>
      <div className='flex flex-col gap-5 p-5'>
        <div className='flex items-center flex-row gap-2'>
        <Info className='w-6 fill-red-500 text-white' />
        <h1 className='font-poppinMedium text-[16px]'>About</h1>
        </div>
      <p className='text-[13px] font-poppins text-gray-900'>This is a place to discover and share exciting events, attend sessions, and connect with others.</p>
      <p className='text-[12px] font-poppinMedium text-gray-500'>&copy; 2025 Ishira Events</p> 
      </div>
    </div>
  )
}

export default ThankYouSide
