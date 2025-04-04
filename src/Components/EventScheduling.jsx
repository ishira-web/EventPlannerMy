import { Calendar, Clock, DoorOpen } from 'lucide-react'
import React from 'react'

function EventScheduling() {
  return (
    <div>
      {/* Event Scheduling */}
      <div className='w-[16rem] h-[15rem] bg-white shadow-2xl rounded-3xl p-2'>
                <div className='flex flex-row gap-2 items-center p-4 border-b border-b-slate-400'>
                  <Calendar className='w-5 text-red-500 '/><h1 className='font-poppinSemi'>Event Scheduling</h1>
                </div>
                <div className='flex flex-col gap-5 p-4'>
                  {/* Date */}
                  <div className='flex flex-row gap-4'>
                     <div className='flex flex-row justify-center items-center p-2 w-10 h-10 rounded-full bg-green-300'>
                       <Calendar className='text-green-600 w-5'/>
                     </div>
                     <div className='flex flex-col'>
                      <h1 className='text-[11px] text-slate-500 font-semibold'>Date</h1>
                      <h1 className='text-gray-900 font-poppinMedium text-[14px]'>Sunday,April 6,2025</h1>
                     </div>
                     {/* Time */}
                     
                  </div>
                  {/* Time */}
                  <div className='flex flex-row gap-4'>
                     <div className='flex flex-row justify-center items-center p-2 w-10 h-10 rounded-full bg-blue-300'>
                       <Clock className='text-blue-600 w-5'/>
                     </div>
                     <div className='flex flex-col'>
                      <h1 className='text-[11px] text-slate-500 font-semibold'>Time</h1>
                      <h1 className='text-gray-900 font-poppinMedium text-[14px]'>8:00 PM</h1>
                      <div className='flex items-center gap-1'>
                      <DoorOpen className=' flex items-center w-3 text-green-600'/>
                      <h1 className='text-[9px] font-bold text-green-600'>Can join 15 minutes early</h1>
                      </div>                   
                    </div> 
                  </div>
                </div>
              </div>
    </div>
  )
}

export default EventScheduling
