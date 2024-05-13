import React from 'react'
import { Outlet } from 'react-router-dom'
import NavbarLanding from '../../Components/Navbar/NavbarLanding'
import FooterLanding from '../../Components/Footer/FooterLanding'

const LandingLayout = () => {
  return (
    <div className='layout background flex flex-col items-center justify-between'>
        <NavbarLanding/>
        <Outlet/>
        <FooterLanding/>
    </div>
  )
}

export default LandingLayout