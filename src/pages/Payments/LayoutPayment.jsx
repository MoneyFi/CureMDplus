import React from 'react'
import logoAzul from '../../assets/icons/Logo_Azul.png'
import success from '../../assets/icons/success.png'
import { Outlet } from 'react-router-dom'

const LayoutPayment = () => {
  return (
    <section className='layout background flex items-center justify-center flex-col'>
        <div className='w-[220px]'>
            <img src={logoAzul} alt='curemd'/>
        </div>
        <Outlet/>
    </section>
  )
}

export default LayoutPayment