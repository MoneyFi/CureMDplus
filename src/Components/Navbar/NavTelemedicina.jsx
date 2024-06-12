import React, { useEffect, useState } from 'react'
import cureLogoBco from '../../assets/icons/Logo_Azul.png'
import { TbMenu } from "react-icons/tb";
import { Link, useLocation } from 'react-router-dom'
import NavbarLandingResponsive from './NavbarLandingResponsive';

const NavTelemedicina = () => {
  const [isFixed, setIsFixed] = useState(false)
  const [open, setOpen] = useState(false)
  const glass = "w-full bg-white  bg-clip-padding backdrop-filter backdrop-blur-[50%] bg-opacity-70 shadow text-primary-blue"
  const { pathname } = useLocation()

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
    <header className={!isFixed ? `flex items-center justify-around w-[100vw] py-3 font-semibold  max-[800px]:justify-between fixed z-20 text-primary-blue px-4 ${pathname === '/account' ? 'bg-primary-blue' : ''} ` : `${glass} flex items-center justify-around font-bold w-[100vw] fixed max-[800px]:justify-between py-3 px-4 z-20`}>

      <div className='w-[170px] p-2 overflow-hidden'>
        <a href='#landing'><img alt='logo' src={cureLogoBco} className='' /></a>
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
            <a href='#products' className='px-3 py-1'>Telemedicina</a>
            <a href='#testimonials' className='px-3 py-1'>Politicas y seguridad</a>
            <a href='#footer' className='px-3 py-1'>Contacto</a>
          </>
        )}
      </div>

      <div>
        <select className='p-1 rounded bg-primary-blue text-sm font-light text-white'>
            <option>Español</option>
            <option>English</option>
            <option>Portugues</option>
        </select>
      </div>
    </header>
  )
}

export default NavTelemedicina