import React from 'react'
import {Routes, Route } from 'react-router-dom'
import HomePage from './Pages/HomePage';
import EventPage from './Pages/EventPage';
import LoginPage from './Pages/LoginPage'
function AppRoutes() {
  return (
   <Routes>
     <Route path='/' element={<HomePage/>}/>
     <Route path='/event-page' element ={<EventPage/>}/>
     <Route path='/login' element = {<LoginPage/>}/>
   </Routes>
  )
}

export default AppRoutes;
