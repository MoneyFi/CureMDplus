import React from 'react'
import { Outlet } from 'react-router-dom'
import FooterLanding from '../../Components/Footer/FooterLanding'
import NavbarFaqs from '../../Components/Navbar/NavbarFaqs'

const FaqsLayout = () => {
  return (
    <div className='layout background flex flex-col items-center justify-between'>
        <NavbarFaqs/>
        <Outlet/>
        <FooterLanding/>
    </div>
  )
}

export default FaqsLayout