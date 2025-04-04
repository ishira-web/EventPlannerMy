import React from 'react'
import SideBar from './SideBar'
import ThankYouSide from './ThankYouSide'

function AsideBar() {
  return (
    <div className='flex flex-col gap-4 fixed'>
      <SideBar/>
      <ThankYouSide/>
    </div>
  )
}

export default AsideBar
