import React, { useEffect } from 'react'
import { IoMdClose } from "react-icons/io";
import { Link, useLocation } from 'react-router-dom';
import { changeForm } from '../../features/formSlice/formSlice';
import { useDispatch } from 'react-redux';

const NavbarLandingResponsive = ({open, setOpen}) => {
  const { pathname } = useLocation()
  const dispatch = useDispatch()
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
        {pathname === '/faqs' ? <Link className='font-semibold p-2' to="/">Home</Link> :
        <>
        <a className='font-semibold p-2' href='#products'>Productos</a>
        <a className='font-semibold p-2' href='#testimonials'>Sobre nosotros</a>
        <a className='font-semibold p-2' href='#footer'>Contacto</a>
        <Link className='font-semibold p-2' to="/faqs">FAQs</Link>
        </>}
       </div>
       <div className='flex flex-col p-2 items-center justify-center w-full'>
        <button onClick={()=>dispatch(changeForm(true))} className='w-full bg-primary-blue p-1 rounded-[20px] text-white font-semibold mb-2'>Ingresar</button>
        <a className='w-full bg-primary-blue p-1 rounded-[20px] text-white font-semibold'>Contactanos</a>
       </div>
    </div>
  )
}

export default NavbarLandingResponsive