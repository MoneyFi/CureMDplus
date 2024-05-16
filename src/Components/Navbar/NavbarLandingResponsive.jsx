import React, { useEffect } from 'react'
import { IoMdClose } from "react-icons/io";

const NavbarLandingResponsive = ({open, setOpen}) => {
    useEffect(()=>{

    },[open])
  return (
    <div className='w-[250px] h-[400px] bg-white mr-[208px] mt-[310px] rounded shadow text-primary-blue flex flex-col items-start justify-between p-2'>
       <button 
       onClick={()=>setOpen(!open)}
       className='w-[30px] h-[30px] bg-primary-blue rounded-full flex items-center justify-center self-end'>
       <IoMdClose size={15} color='white' />
       </button>
       <div className='flex flex-col p-2 items-start justify-center'>
        <a className='font-semibold p-2'>Productos</a>
        <a className='font-semibold p-2'>Sobre nosotros</a>
        <a className='font-semibold p-2' href="">Contacto</a>
        <a className='font-semibold p-2' href="">FAQs</a>
       </div>

       <div className='flex flex-col p-2 items-center justify-center w-full p-2'>
        <a className='w-full bg-primary-blue p-1 rounded-[20px] text-white font-semibold mb-2'>Ingresar</a>
        <a className='w-full bg-primary-blue p-1 rounded-[20px] text-white font-semibold'>Contactanos</a>
       </div>
    </div>
  )
}

export default NavbarLandingResponsive