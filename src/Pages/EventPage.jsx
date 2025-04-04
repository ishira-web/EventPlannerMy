import React from 'react'
import Header from '../Components/Header'
import AsideBar from '../Components/AsideBar'
import EventLayout from '../Layouts/EventLayout'

function EventPage() {
  return (
    <div className='bg-[#F3F4F6] min-h-screen w-full px-5 overflow-x-hidden'>
    <Header/> 
    <AsideBar/>
    <EventLayout/>
    </div>
  )
}

export default EventPage
