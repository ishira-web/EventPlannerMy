import React from 'react'
import Header from '../Components/Header'
import AsideBar from '../Components/AsideBar'
import LoginLayout from '../Layouts/LoginLayout'

function LoginPage() {
  return (
    <div className='bg-[#F3F4F6] min-h-screen w-full px-5 overflow-x-hidden'>
    <Header/> 
    <AsideBar/>
    <LoginLayout/>
    </div>
  )
}

export default LoginPage
