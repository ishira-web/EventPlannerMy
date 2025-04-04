import { Globe, MapPin, Table, TableProperties, Video } from 'lucide-react'
import React from 'react'

function SideBar() {
  return (
    <div className='w-[18rem] h-[22rem] bg-white rounded-4xl mt-28  '>
      <div className='flex flex-col gap-5 px-5 py-3'>
        <div className='flex w-full flex-row gap-5 items-center p-3  border-b-2 border-gray-300'>
          <TableProperties className='text-red-500 text-md' /><h1 className='text-md text-gray-800 font-poppinMedium'>Categories</h1>
        </div>
        <div className='flex flex-col items-start gap-7 text-md font-medium'>
          <div className='flex gap-4 font-poppins cursor-pointer hover:bg-gray-100 hover:text-red-500 p-2 rounded-lg w-full transition-colors'>
            <Table className='text-red-500 w-5'/><h1 className='text-gray-800 font-poppinMedium'>All Events</h1>
          </div>
          <div className='flex gap-4 font-poppins cursor-pointer hover:bg-gray-100 hover:text-blue-600 p-2 rounded-lg w-full transition-colors'>
            <Video className='fill-blue-600 text-blue-600 w-5'/><h1 className='text-gray-800 font-poppinMedium'>All Events</h1>
          </div>
          <div className='flex gap-4 font-poppins cursor-pointer hover:bg-gray-100 hover:text-yellow-500 p-2 rounded-lg w-full transition-colors'>
            <Globe className='fill-yellow-500 text-amber-50 w-5'/><h1 className='text-gray-800 font-poppinMedium'>All Events</h1>
          </div>
          <div className='flex gap-4 font-poppins cursor-pointer hover:bg-gray-100 hover:text-green-500 p-2 rounded-lg w-full transition-colors'>
            <MapPin className='fill-green-500 text-white w-5'/><h1 className='text-gray-800 font-poppinMedium'>All Events</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SideBar