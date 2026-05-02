import React from 'react'
import Nav from './Nav'
import Footer from './footer'
import { Outlet } from 'react-router-dom'
function MainLayout() {
  return (
    <div>
      <Nav/>
        <Outlet/>       
        <Footer/>
    </div>
  )
}

export default MainLayout
