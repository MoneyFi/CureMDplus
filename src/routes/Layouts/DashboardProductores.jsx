import React from 'react'
import { Outlet } from 'react-router-dom'
import NavbarProductores from '../../Components/Navbar/NavbarProductores'

const DashboardProductores = () => {
  return (
    <div className='layout background flex items-center justify-center max-[1000px]:flex-col'>
        <NavbarProductores/>
        <div className='w-full flex items-center justify-between flex-col'>
        <Outlet/>
        <footer>footer</footer>
        </div>
    </div>
  )
}

export default DashboardProductores