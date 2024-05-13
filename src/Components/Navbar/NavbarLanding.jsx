import React from 'react'
import cureLogo from '../../assets/icons/Logo_Azul.png'

const NavbarLanding = () => {
  return (
    <header className='flex items-center justify-between w-full p-3 '>
        <div className='w-[250px]'>
            <img alt='logo' src={cureLogo}/>
        </div>
        <div>
            <a className='px-3 py-1 font-semibold text-primary-blue text-xl'>Productos</a>
            <a className='px-3 py-1 font-semibold text-primary-blue text-xl'>Sobre nosotros</a>
            <a className='px-3 py-1 font-semibold text-primary-blue text-xl'>Contacto</a>
        </div>
    </header>
  )
}

export default NavbarLanding