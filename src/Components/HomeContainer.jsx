import { Calendar, CalendarDays, Camera, Video } from 'lucide-react'
import React from 'react'

function HomeContainer() {
  return (
      <div className='w-[70rem] h-[25rem] mt-28 rounded-4xl overflow-hidden'>
      <div className="relative h-full w-full bg-gradient-to-r from-gray-800 to-gray-900 rounded-4xl">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        
        {/* Text content container */}
        <div className="relative  z-10 p-12 flex flex-col h-full">
          <h1 className="text-5xl font-bold text-white mb-4 font-poppins ">Discover Exciting Events</h1>
          <p className="text-lg text-gray-200 mb-6 font-poppins">Connect, learn, and engage with the community through our diverse range of events</p>
          
           {/* Event Showing Section */}
           <div className='flex flex-1 gap-5'>
           <div>
           <div className=' font-poppins  bg-gray-600 w-auto h-[4.5rem] rounded-xl'>
          <div className='p-2 flex flex-row items-center justify-center gap-4'>
              {/* number of Events */}
              <div className='w-14 h-14 flex justify-center items-center bg-red-400  rounded-full'>
               <h1 className='text-red-700 text-xl font-poppins relative z-90'>1</h1>
            </div>
            <div >
                <h1 className='text-gray-100 font-poppinSemi'>Upcoming Events</h1>
                <h1 className='text-sm  text-gray-300'>Join us soon</h1>
            </div>
          </div>
           </div>
        </div>
        <div>
           <div className=' font-poppins  bg-gray-600 w-auto h-[4.5rem] rounded-xl'>
          <div className='p-2 flex flex-row items-center justify-center gap-4'>
              {/* number of Events */}
              <div className='w-14 h-14 flex justify-center items-center bg-gray-300  rounded-full'>
               <Video className='text-gray-800'/>
            </div>
            <div >
                <h1 className='font-medium text-gray-100 font-poppinSemi'>Virtual & Physical</h1>
                <h1 className='text-sm  text-gray-300'>Multiple ways to attend</h1>
            </div>
          </div>
           </div>
        </div>
           </div>
           {/* Button Placement */}
           <div className='flex flex-row gap-5'>
           <button className='bg-[#B92D32] w-[12rem] min-h-12 flex flex-row items-center justify-center gap-3 rounded-4xl'>
           <CalendarDays className='text-sm text-[#F6E5E5]'/><h1 className='font-poppins font-medium text-sm text-white'>Browse Events</h1>
           </button>
           <button className='bg-[#5E6368] w-[12rem] min-h-12    flex flex-row items-center justify-center gap-3 rounded-4xl'>
           <Calendar  className='text-sm text-[#F6E5E5]'/><h1 className='font-poppins font-medium text-sm text-white'>Calender View</h1>
           </button>
        
           </div>
        </div> 
      </div>
    </div>
    
  )
}

export default HomeContainer