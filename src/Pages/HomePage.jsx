import React from 'react'
import AsideBar from '../Components/AsideBar'
import Header from '../Components/Header'
import HomeLayout from '../Layouts/HomeLayout'

function HomePage() {
  return (
    <div className='bg-[#F3F4F6] min-h-screen w-full px-5 overflow-x-hidden'>
    <Header/> 
    <AsideBar/>
    <HomeLayout/>
    </div>
  )
}

export default HomePage
