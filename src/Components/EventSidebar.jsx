import React from 'react'
import EventScheduling from './EventScheduling'
import CountDownComp from './CountDownComp'

function EventSidebar() {
  return (
    <div className='flex flex-col gap-8'>
      <EventScheduling/>
      <CountDownComp/>
    </div>
  )
}

export default EventSidebar
