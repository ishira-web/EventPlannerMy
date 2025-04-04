import { Calendar, Calendar1, Clock, DoorOpen, MoveLeft, User, UserPlus, UserRoundPlus, Video } from 'lucide-react'
import React from 'react'
import photo from '../assets/Images/hq720.jpg'
import IconTextBadge from './IconTextBadge'
import { Link } from 'react-router-dom'
import Comment from './Comment'
import CountdownTimer from './CountdownTimer'
import EventSidebar from './EventSidebar'

function DetailPage() {
  return (
    <div className='min-h-screen w-[70rem] bg-white mt-28 rounded-4xl font-poppins shadow'>
      {/* Back Button */}
    <Link to="/" > <button className='flex flex-row gap-3 m-4 px-3 py-1 text-gray-500 font-poppinMedium hover:text-red-500 transition-colors'>
        <MoveLeft/>Back to Events
      </button></Link>
      
      {/* Event Details */}
      <div className='px-6 pb-6'>
        {/* Image with text overlay */}
        <div className='relative'>
          <img 
            src={photo} 
            alt="event photo" 
            className='w-full h-[25rem] object-cover rounded-xl' 
          />
          
          {/* Text overlay container */}
          <div className='absolute bottom-0 left-0 right-0 p-6  bg-gradient-to-t from-black/80 to-transparent rounded-b-xl'>
            <div className='flex items-center gap-3'>
              {/* Badge Component */}
              <IconTextBadge 
                icon={<Video className="h-4 w-4" />} 
                text="Zoom Session" 
                color="blue"
                size='md'
              />
            </div>
            <h1 className='text-white text-5xl font-bold  mt-5 '>
            🔴100% Free Website Development & Hosting Masterclass with Ishira
            </h1>
            <div className='flex flex-row gap-4 text-gray-300 font-poppinSemi mt-5'>
                {/* Date */}
                <div className='flex flex-row gap-2 text-sm items-center'><Calendar className='w-4'/><h1>Sunday, April 6, 2025</h1></div>
                {/* Time */}
                <div className='flex flex-row gap-2 text-sm items-center'><Clock className='w-4'/><h1>8:00 PM</h1></div>
              </div>
          </div>
        </div>
        
        {/* Additional content below the image */}
        <div className='mt-6'>
          <div className='flex flex-col gap-3'>
            {/* Host Show */}
            <div className='flex flex-row gap-3 items-center'>
              <div className='flex flex-row justify-center items-center w-12 h-12 rounded-full bg-gradient-to-bl from-slate-900 to-blue-900 text-gray-200'>
                <User className='fill-gray-200 '/>
              </div>
              <div className='flex flex-col '>
                <h1 className='text-gray-900 text-lg'>Ishira Pahasara</h1>
                <h1 className='text-gray-500 text-[11px]'>Host</h1>
              </div>
            </div>
            {/* End of Host */}
            <div className='flex flex-row gap-3'>
             <div className='flex flex-col gap-3'>
                             {/* Description Section */}
              <div className='w-[50rem] h-auto bg-white  pb-5 border-b border-b-gray-400'>
               🔴 Join KD Jayakody LIVE right now for a step-by-step guide on building and hosting your website completely FREE!<br/>
              
                  <span> In this live session, you'll learn: <br />
                  * Fundamentals of website development. <br />
                  * How to find and set up reliable 100% free website hosting. <br />
                  * Tips and tricks for designing and launching your first site. <br />
                  * Live Q&A session - get your questions answered! <br />
                  </span>
                  Perfect for beginners, small businesses, or anyone wanting a web presence without the cost. Hosted by web developer KD Jayakody. <br /><br />

                  #WebsiteDevelopment #FreeHosting #WebDesign #LiveCoding #KDJayakody #BuildAWebsite #FreeWebsite #TechTutorial #SriLanka
               </div> 
               <div className='h-auto pb-3 border-b border-b-gray-400'>
                <div className='bg-blue-600 p-3 rounded-4xl flex flex-row items-center gap-3 w-[11rem] h-auto pb-3 border-b border-b-gray-400'>
                <UserPlus  className='fill-white text-white'/><h1 className='text-sm text-white'>Register to Join</h1>
                </div>
               </div>
               {/* Comment Section */}
              <Comment/>
             </div>
              {/* ======================================================================= */}
              <EventSidebar/>
            </div>
            <div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailPage