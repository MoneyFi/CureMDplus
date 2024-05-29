import React, { useEffect, useState } from 'react'
import cureLogoBco from '../../assets/icons/Logo_bco.png'
import { TbMenu } from "react-icons/tb";
import { useLocation } from 'react-router-dom'
import NavbarLandingResponsive from './NavbarLandingResponsive';
import { useDispatch } from 'react-redux';
import { changeForm } from '../../features/formSlice/formSlice'

const NavbarLanding = () => {
  const [isFixed, setIsFixed] = useState(false)
  const [open, setOpen] = useState(false)
  const glass = "w-full bg-[#283E94]  bg-clip-padding backdrop-filter backdrop-blur-[50%] bg-opacity-70  shadow text-white"
  const { pathname } = useLocation()
  const dispatch = useDispatch()

  useEffect(() => {
    const handleScroll = () => {
      // Verifica la posición actual del scroll
      const scrollPosition = window.scrollY;

      // Establece si la barra de navegación debe estar fija o no
      setIsFixed(scrollPosition > 80); // Puedes ajustar el valor según tus necesidades
    };

    // Agrega un event listener para manejar el scroll
    window.addEventListener('scroll', handleScroll);


    // Limpia el event listener cuando el componente se desmonta
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }


  }, [])


  return (
    <header className={!isFixed ? `flex items-center justify-around w-[100vw] py-3 font-light  max-[800px]:justify-between fixed z-20 text-white px-4 ${pathname === '/faqs' ? 'bg-primary-blue' : ''} ` : `${glass} flex items-center justify-around font-light w-[100vw] fixed max-[800px]:justify-between py-3 px-4 z-20`}>

      <div className='w-[170px] overflow-hidden'>
        <a href='#landing'><img alt='logo' src={cureLogoBco} className='mt-5' /></a>
      </div>

      <button
        onClick={() => setOpen(!open)}
        className='min-[800px]:hidden flex items-center justify-center p-2 relative'>
        <TbMenu size={25} />

        {
          open === true ?
            (<div className='absolute'>
              <NavbarLandingResponsive open={open} setOpen={setOpen} />
            </div>)
            :
            null
        }
      </button>
      <div className='max-[800px]:hidden'>
        {pathname === '/faqs' ? (
          ""
        ) : (
          <>
            <a href='#products' className='px-3 py-1'>Productos</a>
            <a href='#testimonials' className='px-3 py-1'>Sobre nosotros</a>
            <a href='#footer' className='px-3 py-1'>Contacto</a>
            <a href='#faqs' className='px-3 py-1'>FAQs</a>
          </>
        )}
      </div>

      <div className='max-[800px]:hidden'>
        <button
        onClick={() => dispatch(changeForm(true))}
        className='px-3 py-1 font-regular text-md'>Ingresar</button>
        <a href='#publicity' className={`px-3 py-1 font-regular text-md rounded bg-[#239FD8] text-white`}>Contactanos</a>

      </div>
    </header>
  )
}

export default NavbarLanding