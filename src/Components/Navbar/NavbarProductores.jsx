import React from 'react'
import logo from '../../assets/icons/Logo_Azul.png'
import ProductorOptions from './Productores/ProductorOptions';
import { RiMenu5Fill } from 'react-icons/ri';

const NavbarProductores = () => {
  return (
    <header className='h-screen w-[300px] flex min-[1000px]:flex-col items-start p-2 justify-around max-[1000px]:w-full mt-5 max-[1000px]:h-[10vh] max-[1000px]:items-center max-[1000px]:justify-between max-[1000px]:p-2'>
        <div className='w-[200px] p-2 flex items-center justify-center'>
                <img src={logo} alt='logo' className='mt-5' />
            </div>

      <ProductorOptions/>

      <div className='min-[1000px]:hidden p-4'>
        <RiMenu5Fill className='text-primary-blue' size={24}/>
      </div>

    </header>
  )
}

export default NavbarProductores