import React from 'react'

function Header() {
  return (
    <div className="w-full py-2 min-h-[5rem] bg-white shadow-lg font-poppins top-0 left-0 right-0 z-50 fixed">
      <div className='flex flex-row px-2 py-1 gap-4'>
        <div className='bg-red-500 rounded-full w-12 h-12 text-white flex justify-center items-center font-semibold text-2xl'>I</div>
        <div className='flex flex-col py-1'>
          <h1 className='text-xl font-bold uppercase'><span className='text-red-500'>Ishira</span> Pahasara</h1>
          <h1 className='text-[0.7rem] text-gray-500 '>Share your voice.connect with others</h1>
        </div>
      </div>
    </div>
  )
}

export default Header
